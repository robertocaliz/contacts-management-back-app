import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { PasswordService } from '../../shared/services';



export const signup = async (req: Request<{}, {}, User>, res: Response) => {
	const user = req.body;
	const hash = await PasswordService.getHash(user.password);
	await UsersProvider
		.create({ ...user, password: hash })
		.then(userId => {
			res.status(StatusCodes.CREATED).json(userId);
		});
};