import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { PasswordService } from '../../shared/services';
import { ConflictError } from '../../utils/errors';



export const signup = async (req: Request<{}, {}, User>, res: Response) => {
	const user = req.body;
	const emailAlreadyExists = await UsersProvider.getByEmail(user.email);
	if (emailAlreadyExists) {
		throw new ConflictError('Email already exists.');
	}
	const hash = await PasswordService.getHash(user.password);
	await UsersProvider
		.create({ ...user, password: hash })
		.then(userId => {
			res.status(StatusCodes.CREATED).json({ userId });
		});
};