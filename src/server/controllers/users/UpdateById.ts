import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { ConflictError } from '../../utils/errors';
import { findConflictErrors } from './helper';
import { AlterationTokenProvider } from '../../database/providers/alteration-token';

export const updateById = async (
    req: Request<Partial<User>, Record<string, never>, User>,
    res: Response,
    next: NextFunction,
) => {
    const { id: userId } = req.params;
    const newUserData = req.body;

    await UsersProvider.updateById({ name: newUserData.name }, String(userId));

    if (newUserData.email) {
        const result = await findConflictErrors(newUserData);
        if (result.found) {
            throw new ConflictError('', result.errors);
        }

        const alterationToken = await AlterationTokenProvider.create({
            userId: userId as string,
            newEmail: newUserData.email,
        });

        req.body.email = newUserData.email;
        req.body.alterationToken = alterationToken;

        return next();
    }

    res.status(StatusCodes.OK).send();
};
