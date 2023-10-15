import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { ContactsRepo } from '../../repository';
import { StatusCodes } from 'http-status-codes';



export const deleteById = async (req: Request<Partial<Contact>>, res: Response) => {
	const { id: contactId } = req.params;
	ContactsRepo.deleteById(contactId as number);
	res
		.status(StatusCodes.OK)
		.send();
};