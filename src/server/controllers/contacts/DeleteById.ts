import { Request, Response } from 'express';
import { Contact } from '../../models';
import { ContactsRepo } from '../../repository';
import { StatusCodes } from 'http-status-codes';



export const deleteById = async (req: Request<Pick<Contact, 'id'>>, res: Response) => {
	const contactId = req.params.id;
	ContactsRepo.deleteById(contactId);
	res
		.status(StatusCodes.OK)
		.send();
};