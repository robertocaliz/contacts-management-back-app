import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendMail } from '../../../functions/email';
import { renderFile } from '../../../functions/ejs';
import path from 'path';
import { ForbiddenError } from '../../../utils/errors';


export const sendSignupConfirmationEmail = async (
	err: ForbiddenError,
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {

	const user = req.body;

	const html = await renderFile({
		file: path.resolve(__dirname, '..', '..', '..', 'ejs-files', 'signup-confirmation-message.ejs'),
		data: { user }
	});

	await sendMail(user.email, html)
		.then(() => {
			
			if (err) throw err;
			
			res
				.status(StatusCodes.CREATED)
				.json({
					emailSend: true
				});
		});
};