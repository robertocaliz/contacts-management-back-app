import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import {
    ActivationTokenProvider,
    UsersProvider,
} from '../../database/providers';
import { PasswordService } from '../../shared/services';
import { ConflictError } from '../../utils/errors';
import { findConflictErrors } from './helper';

export const signup = async (
    req: Request<Record<string, never>, Record<string, never>, User>,
    res: Response,
    next: NextFunction,
) => {
    const userData = req.body;

    const result = await findConflictErrors(userData);
    if (result.found) {
        throw new ConflictError('', result.errors);
    }

    const hash = await PasswordService.getHash(userData.password);

    await UsersProvider.create({ ...userData, password: hash }).then(
        async (userId) => {
            const activationToken = await ActivationTokenProvider.create({
                userId: userId.toString(),
            });
            req.body.activationToken = activationToken._id;
            next();
        },
    );
};
