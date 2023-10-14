import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';


export const signup = async (req: Request<{}, {}, User>, res: Response) => {
	const user = req.body;
	await UsersProvider
		.create(user)
		.then(userId => {
			res.status(StatusCodes.CREATED).json(userId);
		});
};