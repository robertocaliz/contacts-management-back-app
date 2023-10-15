import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../utils/errors';





const logError = (err: Error) => {
	console.log(err);
};


export const errorLogger = (
	err: Error & AppError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!err.statusCode || err.statusCode === StatusCodes.INTERNAL_SERVER_ERROR)
		logError(err);
	next(err);
};


export const returnError = (
	err: Error & AppError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = err.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;
	const message = err.statusCode ? err.message : 'Error trying to process your request!';
	res
		.status(statusCode)
		.json({
			error: message
		});
	next();
};