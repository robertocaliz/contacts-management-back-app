import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';



export const deleteById = async (req: Request<Partial<Contact>>, res: Response) => {
	const { id: contactId } = req.params;
	const { loggedUserId } = req.headers;
	await ContactsProvider
		.deleteById(String(contactId), loggedUserId as string)
		.then(() => {
			res
				.status(StatusCodes.OK)
				.send();
		});
};