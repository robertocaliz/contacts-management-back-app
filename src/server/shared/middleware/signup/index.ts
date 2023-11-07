import { NextFunction, Request, Response } from 'express';
import { sendMail } from '../../../functions/email';
import { renderFile } from '../../../functions/ejs';
import path from 'path';
import { StatusCodes } from 'http-status-codes';


export const sendSignupConfirmationEmail = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = req.body;
	const html = await renderFile({
		file: path.resolve(__dirname, '..', '..', '..', 'ejs-files', 'signup-confirmation-message.ejs'),
		data: { user }
	});
	await sendMail(
		{
			to: user.email,
			html,
			subject: 'Activação de conta'
		})
		.then(() => next());
};


export const returnSignupResponse = (
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {
	res
		.status(StatusCodes.CREATED)
		.json({ emailSend: true });
};



export const sendSignupRecoveryEmail = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = req.body;
	const html = await renderFile({
		file: path.resolve(__dirname, '..', '..', '..', 'ejs-files', 'signup-recovery-message.ejs'),
		data: { user }
	});
	await sendMail(
		{
			to: user.email,
			html,
			subject: 'Recuperação de cadastro'
		})
		.then(() => next());
};



export const returnSignupRecoveryResponse = (
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {
	res
		.status(StatusCodes.OK)
		.json({ emailSend: true });
};

