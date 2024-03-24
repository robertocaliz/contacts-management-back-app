import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../../../utils/errors';
import { EJWTError, JWTService } from '../../services';

export const ensureAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const accessToken = req.headers.authorization;

    if (!accessToken || !accessToken.match(/^Bearer\s.{1,}$/)) {
        throw new UnauthorizedError('No authorization to execute this action!');
    }

    const [, token] = accessToken.split(/\s/);

    const result = JWTService.verify(token);

    if (result === EJWTError.INVALID_TOKEN) {
        throw new UnauthorizedError('No authorization to execute this action!');
    }

    const userData = result;
    req.headers = { ...req.headers, ...userData };

    return next();
};
