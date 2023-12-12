import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { ConflictError } from '../../utils/errors';
import { findConflictErrors } from './helper';



export const updateById = async (
	req: Request<Partial<User>, {}, User>,
	res: Response,
	next: NextFunction) => {

	const { id: userId } = req.params;
	const newUserData = req.body;

	const user = await UsersProvider
		.updateById({ name: newUserData.name }, String(userId));

	if (newUserData.email) {
		
		const result = await findConflictErrors(newUserData);
		if (result.found) {
			throw new ConflictError('', result.errors);
		}

		req.body.email = user.email;
		req.body.alterationToken = 'alteration-token';

		return next();

	}

	res
		.status(StatusCodes.OK)
		.send();
};