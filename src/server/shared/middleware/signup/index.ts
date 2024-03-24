/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { sendMail } from '../../../functions/email';
import { renderFile } from '../../../functions/ejs';
import path from 'path';
import { StatusCodes } from 'http-status-codes';

export const sendSignupConfirmationEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const user = req.body;
    const mailBody = await renderFile({
        file: path.resolve(
            __dirname,
            ...(process.env.MAIL_BODY_SIGNUP_CONFIRMATION?.split(
                ',',
            ) as string[]),
        ),
        data: { user },
    });
    await sendMail({
        to: user.email,
        mailBody,
        subject: String(process.env.MAIL_SUBJECT_SIGNUP_CONFIRMATION),
    }).then(() => next());
};

export const sendSignupRecoveryEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const user = req.body;
    const mailBody = await renderFile({
        file: path.resolve(
            __dirname,
            ...(process.env.MAIL_BODY_SIGNUP_RECOVER?.split(',') as string[]),
        ),
        data: { user },
    });
    await sendMail({
        to: user.email,
        mailBody,
        subject: String(process.env.MAIL_SUBJECT_SIGNUP_RECOVER),
    }).then(() => next());
};

export const returnSignupResponse = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    res.status(StatusCodes.CREATED).json({ emailSend: true });
};

export const returnSignupRecoveryResponse = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    res.status(StatusCodes.OK).json({ emailSend: true });
};
