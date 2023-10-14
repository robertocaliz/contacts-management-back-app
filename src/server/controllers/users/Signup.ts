import { Request, Response } from 'express';
import { User } from '../../models';
import UsersRepo from '../../repository/users-repo';
import { StatusCodes } from 'http-status-codes';


export const signup = async (req: Request<{}, {}, User>, res: Response) => {
	const user = req.body;
	UsersRepo.add(user);
	return res.status(StatusCodes.CREATED).send();
};