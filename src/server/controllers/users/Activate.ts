import { Request, Response } from 'express';
import { User } from '../../database/models';
import { ActivationTokenProvider, UsersProvider } from '../../database/providers';
import { BadRequestError } from '../../utils/errors';
import { StatusCodes } from 'http-status-codes';
import { expired } from '../../functions/time';
import { USER_STATUS } from '../../constants';



export const activate = async (
	req: Request<Pick<User, 'activationToken'>>,
	res: Response,
) => {

	const activationToken = await ActivationTokenProvider.getById(req.params.activationToken as string);
	
	if (!activationToken || expired(activationToken.expiresIn)) {
		throw new BadRequestError('Invalid or expired activation token.');
	}

	await UsersProvider
		.updateById(
			{ status: USER_STATUS.Active },
			String(activationToken.userId)
		)
		.then(async () => {
			await ActivationTokenProvider.deleteById(activationToken._id);
			res
				.status(StatusCodes.OK)
				.redirect(process.env.USER_ACTIVATION_SUCCESS_PAGE as string);
		});

};