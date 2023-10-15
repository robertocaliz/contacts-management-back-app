import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { ContactsRepo } from '../../repository';
import { StatusCodes } from 'http-status-codes';



export const getById = async (req: Request<Partial<Contact>>, res: Response) => {
	const { id: contactId } = req.params;
	const contact = ContactsRepo.getById(contactId as number);
	if (contact) {
		return res.status(StatusCodes.OK)
			.json(contact);
	}
	return res.status(StatusCodes.NOT_FOUND)
		.send();
};