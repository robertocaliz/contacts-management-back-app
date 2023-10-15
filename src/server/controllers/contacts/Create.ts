import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { ContactsProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';




export const create = async (req: Request<{}, {}, Contact>, res: Response) => {
	const contact = req.body;
	await ContactsProvider
		.create(contact)
		.then(contactId => {
			res.status(StatusCodes.CREATED).json(contactId);
		});
};
