import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ContactsRepo } from '../../repository';



export const getAll = async (req: Request, res: Response) => {
	res
		.status(StatusCodes.OK)
		.json(ContactsRepo.getAll());
};