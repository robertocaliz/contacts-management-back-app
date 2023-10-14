import { Request, Response } from 'express';
import { User } from '../../models';
import UsersRepo from '../../repository/users-repo';
import { StatusCodes } from 'http-status-codes';



export const getById = async (req: Request<User>, res: Response) => {
	const userId = req.params.id;
	const user = UsersRepo.getById(userId);
	if (user) {
		return res.status(StatusCodes.OK)
			.json(user);
	}
	return res.status(StatusCodes.NOT_FOUND)
		.send();
};