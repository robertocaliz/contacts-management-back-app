import { Request, Response } from 'express';
import { Contact } from '../../models';
import { ContactsRepo } from '../../repository';
import { StatusCodes } from 'http-status-codes';




export const create = async (req: Request<{}, {}, Contact>, res: Response) => {
	const contact = req.body;
	const contactId = ContactsRepo.save(contact);
	res
		.status(StatusCodes.CREATED)
		.json(contactId);
};
