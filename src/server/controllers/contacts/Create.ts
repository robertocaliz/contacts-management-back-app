import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { ContactsProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { ConflictError } from '../../utils/errors';
import { getConflictErrorsBeforeCreate } from './helper';



export const create = async (req: Request<{}, {}, Contact>, res: Response) => {

	const { loggedUserId } = req.headers;
	const contact = req.body;

	const errors = await getConflictErrorsBeforeCreate(contact, loggedUserId as string);
	if (errors.length > 0) {
		throw new ConflictError('', errors);
	}

	await ContactsProvider
		.create(contact, loggedUserId as string)
		.then(() => {
			res
				.status(StatusCodes.CREATED)
				.json();
		});
};
