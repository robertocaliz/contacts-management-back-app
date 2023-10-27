import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { ContactsProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';




export const create = async (req: Request<{}, {}, Contact>, res: Response) => {
	const { loggedUserId } = req.headers;
	const contact = { ...req.body };
	await ContactsProvider
		.create(contact, loggedUserId as string)
		.then(() => {
			res
				.status(StatusCodes.CREATED)
				.json();
		});
};
