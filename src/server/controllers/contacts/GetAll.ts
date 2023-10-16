import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';
import { QueryProps } from '../../types';



export const getAll = async (req: Request<{}, {}, {}, QueryProps>, res: Response) => {

	const contacts = await ContactsProvider.getAll(
		{
			createdBy: Number(req.headers.userId),
			...req.query
		}
	);
	return res
		.status(StatusCodes.OK)
		.json(contacts);
};