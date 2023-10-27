import { Request, Response } from 'express';
import { User } from '../../database/models';
import { RefreshTokensProvider, UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError } from '../../utils/errors';
import { JWTService, PasswordService } from '../../shared/services';



export const login = async (req: Request<{}, {}, Pick<User, 'email' | 'password'>>, res: Response) => {
	const { email, password } = req.body;
	const user = await UsersProvider.getByEmail(email);
	if (user && await PasswordService.equals(password, user.password)) {
		const accessToken = JWTService.sign({ loggedUserId: user.id });
		await RefreshTokensProvider.deleteByUserId(user.id);
		const refreshToken = await RefreshTokensProvider.create(user.id);
		return res
			.status(StatusCodes.OK)
			.json(
				{
					_id: user._id,
					name: user.name,
					email: user.email,
					accessToken,
					refreshToken
				}
			);
	}
	throw new UnauthorizedError('Incorrect e-mail or password');
};
