import { Request, Response } from 'express';
import { Contact } from '../../models';
import { ContactsRepo } from '../../repository';
import { StatusCodes } from 'http-status-codes';



export const getById = async (req: Request<Pick<Contact, 'id'>>, res: Response) => {
	const id = req.params.id;
	const contact = ContactsRepo.getById(id);
	if (contact) {
		return res.status(StatusCodes.OK)
			.json(contact);
	}
	return res.status(StatusCodes.NOT_FOUND)
		.send();
};