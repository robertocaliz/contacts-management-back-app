import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { ConflictError } from '../../utils/errors';
import { userDataAlreadyExists } from './helper';
import { AlterationTokenProvider } from '../../database/providers/alteration-token';

export const updateById = async (
    req: Request<Partial<User>, Record<string, never>, User>,
    res: Response,
    next: NextFunction,
) => {
    const { id: userId } = req.params;
    const { name: newName, email: newEmail } = req.body;
    const updatedUser = await UsersProvider.updateById(
        { name: newName },
        String(userId),
    );
    if (newEmail != updatedUser.email) {
        const { exists, errors } = await userDataAlreadyExists({
            email: newEmail,
        });
        if (exists) {
            throw new ConflictError('Data already exists.', errors);
        }
        await AlterationTokenProvider.deleteByUserId(String(userId));
        const createdAlterationToken = await AlterationTokenProvider.create({
            userId: String(userId),
            newEmail,
        });
        req.body.email = newEmail;
        req.body.alterationToken = createdAlterationToken._id;
        return next();
    }
    res.status(StatusCodes.OK).send();
};
