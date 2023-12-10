import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { ConflictError } from '../../utils/errors';
import { getConflictErrorBeforeUpdate } from './helper';



export const updateById = async (
	req: Request<Partial<User>, {}, User>,
	res: Response,
	next: NextFunction) => {


	const { id: userId } = req.params;
	const { email, name } = req.body;


	await UsersProvider
		.updateById({ name }, String(userId));


	if (email) {
		const error = await getConflictErrorBeforeUpdate({ email });
		if (error) {
			throw new ConflictError('', error);
		}
		return next();
	}

	
	res
		.status(StatusCodes.OK)
		.send();
};