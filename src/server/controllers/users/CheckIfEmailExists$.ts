import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { RecoveryTokenProvider, UsersProvider } from '../../database/providers';
import { NotFoundError } from '../../utils/errors';



export const checkIfEmailExists$ = async (
	req: Request<{}, {}, Pick<User, 'email' | 'name' | 'recoveryToken'>>,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;
	const user = await UsersProvider.getByEmail(email);
	if (user) {
		const recoveryTokenId = await RecoveryTokenProvider.create(String(user._id));
		req.body = {
			email,
			name: user.name,
			recoveryToken: recoveryTokenId
		};
		return next();
	}
	throw new NotFoundError();
};


