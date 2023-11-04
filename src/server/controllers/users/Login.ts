import { NextFunction, Request, Response } from 'express';
import { User } from '../../database/models';
import { ActivationTokenProvider, RefreshTokenProvider, UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError } from '../../utils/errors';
import { JWTService, PasswordService } from '../../shared/services';
import { USER_STATUS } from '../../constants';
import { EmailBodyDetails } from '../../types';



export const login = async (
	req: Request<{}, {}, User | EmailBodyDetails>,
	res: Response,
	next: NextFunction) => {
	
	const { email, password } = req.body as User;
	const user = await UsersProvider.getByEmail(email);

	if (user && await PasswordService.equals(password, user.password)) {

		if (user?.status === USER_STATUS.Inactive) {
			await ActivationTokenProvider.deleteByUserId(user._id.toString());
			const activationToken = await ActivationTokenProvider.create({ userId: user._id.toString() });
			req.body = {
				name: user.name,
				activationToken: activationToken._id,
				email: user.email
			};
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
