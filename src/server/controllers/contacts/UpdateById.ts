import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { ContactsRepo } from '../../repository';
import { StatusCodes } from 'http-status-codes';




export const updateById = async (req: Request<Pick<Contact, 'id'>, {}, Contact>, res: Response) => {
	const contactId = req.params.id;
	const contact = req.body;
	ContactsRepo.updateById(contact, contactId);
	res
		.status(StatusCodes.OK)
		.send();
};