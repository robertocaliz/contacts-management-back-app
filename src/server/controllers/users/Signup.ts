import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
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
		.then(userId => {

			


			req.body.id = userId.toString();
			next();
		});
};