import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { ActivationTokenProvider, UsersProvider } from '../../database/providers';
import { PasswordService } from '../../shared/services';
import { ConflictError } from '../../utils/errors';
import { getConflictErrorsBeforeSignUp } from './helper';



export const signup = async (
	req: Request<{}, {}, User>,
	res: Response,
	next: NextFunction
) => {
	const user = req.body;
	const errors = await getConflictErrorsBeforeSignUp(user);
	if (errors.length > 0) {
		throw new ConflictError('', errors);
	}
	const hash = await PasswordService.getHash(user.password);
	await UsersProvider
		.create({ ...user, password: hash })
		.then(async userId => {
			const activationToken = await ActivationTokenProvider.create(
				{ userId: userId.toString() }
			);
			req.body.activationToken = activationToken._id;
			next();
		});
};