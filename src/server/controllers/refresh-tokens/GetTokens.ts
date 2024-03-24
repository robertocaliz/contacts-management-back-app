import { Request, Response } from 'express';
import { RefreshTokenProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { JWTService } from '../../shared/services';
import { RefreshTokenObj } from '../../types';
import { expired } from '../../functions/time';
import { NotFoundError } from '../../utils/errors';

export const getTokens = async (
    req: Request<Record<string, never>, Record<string, never>, RefreshTokenObj>,
    res: Response,
) => {
    const { getById, deleteById, create } = RefreshTokenProvider;

    const refreshTokenObj = req.body;

    let refreshToken = await getById({
        refreshTokenId: refreshTokenObj.refreshToken,
    });

    if (!refreshToken) {
        throw new NotFoundError('Refresh token not found.');
    }

    if (expired(refreshToken.expiresIn)) {
        await deleteById(refreshToken._id);
        refreshToken = await create(refreshToken.userId as string);
    }

    const accessToken = JWTService.sign({
        loggedUserId: refreshToken.userId as string,
    });

    return res.status(StatusCodes.OK).send({
        accessToken,
        refreshToken: refreshToken._id,
    });
};
