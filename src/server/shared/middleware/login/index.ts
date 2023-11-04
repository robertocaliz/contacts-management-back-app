/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { InactiveUserError } from '../../../utils/errors';



export const throwInactiveUserError = (
	req: Request,
	res: Response
) => {
	throw new InactiveUserError('Inactive user.');
};