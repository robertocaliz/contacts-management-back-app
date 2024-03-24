import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { RecoveryTokenProvider, UsersProvider } from '../../database/providers';
import { NotFoundError } from '../../utils/errors';

export const recoverSignup = async (
    req: Request<Record<string, never>, Record<string, never>, Partial<User>>,
    res: Response,
    next: NextFunction,
) => {
    const { email } = req.body;
    const user = await UsersProvider.getByEmail(email as string);
    if (!user) {
        throw new NotFoundError('Email not found in the System.');
    }
    await RecoveryTokenProvider.deleteByUserId(String(user._id));
    const recoveryTokenId = await RecoveryTokenProvider.create(
        String(user._id),
    );
    req.body = {
        email,
        name: user.name,
        recoveryToken: recoveryTokenId,
    };
    return next();
};
