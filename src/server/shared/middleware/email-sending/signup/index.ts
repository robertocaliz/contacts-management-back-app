import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';




export const sendConfirmationEmail = (
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {


	res
		.status(StatusCodes.CREATED)
		.send();

};