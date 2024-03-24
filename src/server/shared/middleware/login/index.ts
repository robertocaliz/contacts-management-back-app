/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { InactiveUserError } from '../../../utils/errors';
import { renderFile } from '../../../functions/ejs';
import path from 'path';
import { sendMail } from '../../../functions/email';
import { StatusCodes } from 'http-status-codes';

export const throwInactiveUserError = (req: Request, res: Response) => {
    throw new InactiveUserError('Inactive user.');
};

export const sendMailToConfirmEmailAddressChange = async (
    req: Request,
    res: Response,
) => {
    const user = req.body;
    const mailBody = await renderFile({
        file: path.resolve(
            __dirname,
            ...(process.env.MAIL_BODY_MAIL_ADDRESS_CHANGE?.split(
                ',',
            ) as string[]),
        ),
        data: { user },
    });
    await sendMail({
        to: user.email,
        mailBody,
        subject: String(process.env.MAIL_SUBJECT_MAIL_ADDRESS_CHANGE),
    }).then(() => {
        res.status(StatusCodes.OK).json({
            emailSend: true,
        });
    });
};
