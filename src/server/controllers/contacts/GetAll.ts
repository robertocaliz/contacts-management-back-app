import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';
import { QueryProps } from '../../types';


export const getAll = async (
	req: Request<{}, {}, {}, QueryProps>,
	res: Response) => {

	const { loggedUserId } = req.headers;

	const contacts = await ContactsProvider.getAll(loggedUserId as string, { ...req.query });

	const count = await ContactsProvider.count(loggedUserId as string);

	return res.status(StatusCodes.OK).json({
		count,
		objs: contacts
	});
};