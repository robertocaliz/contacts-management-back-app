import { Request, Response } from 'express';
import UsersRepo from '../../repository/users-repo';
import { User } from '../../database/models';
import { StatusCodes } from 'http-status-codes';



export const login = async (req: Request<{}, {}, Pick<User, 'email' | 'password'>>, res: Response) => {
	const userCredentials = req.body;
	const user = UsersRepo.getByEmail(userCredentials.email);
	if (user && user.password === userCredentials.password) {
		return res
			.status(StatusCodes.OK)
			.json({ ...user, accessToken: 'accessToken' });
	}
	return res
		.status(StatusCodes.UNAUTHORIZED)
		.send();
};
