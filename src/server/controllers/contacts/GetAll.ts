import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';
import { QueryProps } from '../../types';




export const getAll = async (
	req: Request<{}, {}, {}, QueryProps>,
	res: Response) => {

	const { loggedUserId } = req.headers;

	const data = await ContactsProvider.getAll(loggedUserId as string, { ...req.query });

	res
		.status(StatusCodes.OK)
		.json(data);
};