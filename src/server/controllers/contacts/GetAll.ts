import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';



export const getAll = async (req: Request, res: Response) => {
	const contacts = await ContactsProvider.getAll(
		{
			createdBy: Number(req.headers.userId)
		}
	);
	return res
		.status(StatusCodes.OK)
		.json(contacts);
};