import { Request, Response } from 'express';
import { User } from '../../database/models';
import { RecoveryTokenProvider, UsersProvider } from '../../database/providers';
import { BadRequestError } from '../../utils/errors';
import { StatusCodes } from 'http-status-codes';
import { expired } from '../../functions/time';
import { PasswordService } from '../../shared/services';




export const updatePassword = async (
	req: Request<Pick<User, 'recoveryToken'>, {}, { newPassword: string }>,
	res: Response,
) => {

	const { recoveryToken: recoveryTokenId } = req.params;
	const { newPassword } = req.body;

	const recoveryToken = await RecoveryTokenProvider.getById(String(recoveryTokenId));

	if (!recoveryToken || expired(recoveryToken.expiresIn)) {
		throw new BadRequestError('Invalid or expired recovery token.');
	}

	await UsersProvider
		.updateById(
			{ password: await PasswordService.getHash(newPassword) },
			String(recoveryToken?.userId))
		.then(async () => {
			await RecoveryTokenProvider.deleteById(recoveryToken._id);
			res
				.status(StatusCodes.OK)
				.send();
		});

};