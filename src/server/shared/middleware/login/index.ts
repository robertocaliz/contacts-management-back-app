/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { InactiveUserError } from '../../../utils/errors';
import { renderFile } from '../../../functions/ejs';
import path from 'path';
import { sendMail } from '../../../functions/email';
import { StatusCodes } from 'http-status-codes';


export const throwInactiveUserError = (
	req: Request,
	res: Response
) => {
	throw new InactiveUserError('Inactive user.');
};


export const sendMailToConfirmUserEmailAlteration = async (
	req: Request,
	res: Response
) => {
	const user = req.body;
	const html = await renderFile({
		file: path.resolve(__dirname, '..', '..', '..', 'ejs-files', 'confirm-user-email-alteration-message.ejs'),
		data: { user }
	});
	await sendMail(
		{
			to: user.email,
			html,
			subject: 'Ateração de e-mail'
		})
		.then(() => {
			res
				.status(StatusCodes.OK)
				.send();
		});
};