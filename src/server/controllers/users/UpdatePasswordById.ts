import { Request, Response } from 'express';
import { User } from '../../database/models';
import { RecoveryTokenProvider, UsersProvider } from '../../database/providers';
import { BadRequestError } from '../../utils/errors';
import { StatusCodes } from 'http-status-codes';
import { expired } from '../../functions/time';
import { PasswordService } from '../../shared/services';



export const updatePasswordById = async (
	req: Request<Pick<User, 'recoveryToken'>, {}, { newPassword: string }>,
	res: Response,
) => {
	const { recoveryToken: recoveryTokenId } = req.params;
	const { newPassword } = req.body;
	const deletedRecoveryToken = await RecoveryTokenProvider.deleteById(
		recoveryTokenId as string
	);
	if (!deletedRecoveryToken || expired(deletedRecoveryToken.expiresIn)) {
		throw new BadRequestError('Invalid or expired recovery token');
	}
	const hash = await PasswordService.getHash(newPassword);
	await UsersProvider
		.updateById({ password: hash }, String(deletedRecoveryToken.userId))
		.then(() => {
			res
				.status(StatusCodes.OK)
				.send();
		});
};