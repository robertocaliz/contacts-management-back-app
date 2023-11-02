/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { InactiveUserError } from '../../../utils/errors';



export const throwInactiveUserError = (
	err: InactiveUserError,
	req: Request,
	res: Response
) => {
	if (!err || !(err instanceof InactiveUserError)) {
		throw new Error('Invalid error.');
	}
	throw err;
};