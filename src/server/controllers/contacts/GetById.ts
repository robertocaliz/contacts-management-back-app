import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';
import { NotFoundError } from '../../utils/errors';



export const getById = async (req: Request<Partial<Contact>>, res: Response) => {
	const { id: contactId } = req.params;
	const contact = await ContactsProvider.getById(contactId as number);
	if (contact) {
		return res.status(StatusCodes.OK)
			.json(contact);
	}
	throw new NotFoundError('Contact not found!');
};