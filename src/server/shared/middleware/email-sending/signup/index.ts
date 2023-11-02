import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendMail } from '../../../../functions/email';



export const sendConfirmationEmail = async (
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {

	const { email } = req.body;


	const html = '<h1>Ola! Voce acaba de se escrever na contactsPro<h1>';


	await sendMail(email, html)
		.then(() => {
			res
				.status(StatusCodes.CREATED)
				.json({
					emailSend: true
				});
		});

};