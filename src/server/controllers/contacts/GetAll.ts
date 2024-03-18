import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ContactsProvider } from '../../database/providers';
import { QueryProps } from '../../types';


<<<<<<< HEAD


export const getAll = async (
	req: Request<{}, {}, {}, QueryProps>,
	res: Response) => {

	const { loggedUserId } = req.headers;

	const data = await ContactsProvider.getAll(loggedUserId as string, { ...req.query });

	res
		.status(StatusCodes.OK)
		.json(data);
=======
export const getAll = async (
	req: Request<{}, {}, {}, QueryProps>,
	res: Response) => {
	const { loggedUserId } = req.headers;
	await ContactsProvider
		.getAll(loggedUserId as string, req.query)
		.then(data => {
			res
				.status(StatusCodes.OK)
				.json(data);
		});
>>>>>>> 5b9ed56 (modify modules)
};