import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';



export const updateById = async (req: Request<Partial<User>, {}, User>, res: Response) => {
	const { id: userId } = req.params;
	const user = req.body;
	await UsersProvider
		.updateById(user, userId as number)
		.then(() => {
			res
				.status(StatusCodes.OK)
				.send();
		});
};