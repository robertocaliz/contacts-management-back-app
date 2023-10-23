import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { ConflictError } from '../../utils/errors';
import { StatusCodes } from 'http-status-codes';


export const checkIfEmailExists = async (req: Request<{}, {}, Pick<User, 'email'>>, res: Response) => {
	const { email } = req.body;
	const user = await UsersProvider.getByEmail(email);
	if (user) {
		throw new ConflictError('Email already exists');
	}
	return res
		.status(StatusCodes.OK)
		.send();
};