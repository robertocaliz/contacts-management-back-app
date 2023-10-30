import { Request, Response } from 'express';
import { Contact } from '../../database/models';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';
import { getConflictErrorsBeforeUpdate } from './helper';
import { ConflictError } from '../../utils/errors';




export const updateById = async (req: Request<Pick<Contact, 'id'>, {}, Contact>, res: Response) => {
	const contactId = req.params.id;
	const contact = req.body;
	const { loggedUserId } = req.headers;
	
	const errors = await getConflictErrorsBeforeUpdate(
		{ ...contact, id: contactId },
		loggedUserId as string
	);

	if (errors.length > 0) {
		throw new ConflictError('', errors);
	}

	await ContactsProvider
		.updateById({ ...contact, id: contactId }, loggedUserId as string)
		.then(() => {
			res
				.status(StatusCodes.OK)
				.send();
		});
};