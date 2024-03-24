import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { ConflictError } from '../../utils/errors';

export const checkIfEmailExists = async (
    req: Request<
        Record<string, never>,
        Record<string, never>,
        Pick<User, 'email'>
    >,
    res: Response,
) => {
    const { email } = req.body;
    const user = await UsersProvider.getByEmail(email);
    if (user) {
        throw new ConflictError('Email already exists.');
    }
    return res.status(StatusCodes.OK).send();
};
