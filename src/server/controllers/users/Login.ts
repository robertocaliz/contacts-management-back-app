import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { RefreshTokenProvider, UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError } from '../../utils/errors';
import { JWTService, PasswordService } from '../../shared/services';
import { USER_STATUS } from '../../constants';



export const login = async (
	req: Request<{}, {}, Pick<User, 'email' | 'password'>>,
	res: Response,
	next: NextFunction) => {

	const { email, password } = req.body;
	const user = await UsersProvider.getByEmail(email);

	if (user && await PasswordService.equals(password, user.password)) {

		if (user?.status === USER_STATUS.Inactive) {
			return next();
		}

		const accessToken = JWTService.sign({ loggedUserId: user.id });
		await RefreshTokenProvider.deleteByUserId(user.id);
		const refreshToken = await RefreshTokenProvider.create(user.id);

		return res
			.status(StatusCodes.OK)
			.json(
				{
					_id: user._id,
					name: user.name,
					email: user.email,
					accessToken,
					refreshToken: refreshToken._id
				}
			);
	}

	throw new UnauthorizedError('Incorect email or password.');

};
