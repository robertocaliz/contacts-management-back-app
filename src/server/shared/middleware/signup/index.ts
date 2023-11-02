import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendMail } from '../../../functions/email';
import { renderFile } from '../../../functions/ejs';
import path from 'path';


export const sendSignupConfirmationEmail = async (
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
			res
				.status(StatusCodes.CREATED)
				.json({
					emailSend: true
				});
		});

};