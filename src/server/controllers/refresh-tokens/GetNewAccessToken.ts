import { Request, Response } from 'express';
import { RefreshTokensProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { JWTService } from '../../shared/services';
import { RefreshTokenObj } from '../../types';
import { expired } from '../../functions/time';
import { RefreshTokenError } from '../../utils/errors';


export const getNewAccessToken = async (req: Request<{}, {}, RefreshTokenObj>, res: Response) => {

	const { getById, deleteById, create } = RefreshTokensProvider;

	const refreshTokenObj = req.body;

	const refreshToken = await getById({
		refreshTokenId: refreshTokenObj.refreshToken
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}) as any;

	if (!refreshToken) {
		throw new RefreshTokenError('Refresh token not found.');
	}

	let refreshTokenId = refreshToken.id;


	if (expired(refreshToken)) {
		await deleteById(refreshToken.id);
		refreshTokenId = await create(refreshToken.userId);
	}

	const accessToken = JWTService.sign({
		loggedUserId: refreshToken.userId
	});

	return res
		.status(StatusCodes.OK)
		.send({
			accessToken,
			refreshToken: refreshTokenId
		});

};