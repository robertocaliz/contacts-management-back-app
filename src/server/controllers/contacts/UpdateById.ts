import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';




export const updateById = async (req: Request<Pick<Contact, 'id'>, {}, Contact>, res: Response) => {
	const contactId = req.params.id;
	const contact = req.body;
	await ContactsProvider
		.updateById(contact, contactId)
		.then(() => {
			res
				.status(StatusCodes.OK)
				.send();
		});
};