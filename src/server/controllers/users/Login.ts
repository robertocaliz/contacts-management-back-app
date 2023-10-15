import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { UnauthorizedError } from '../../utils/errors';
import { PasswordService } from '../../shared/services';



export const login = async (req: Request<{}, {}, Pick<User, 'email' | 'password'>>, res: Response) => {
	const { email, password } = req.body;
	const user = await UsersProvider.getByEmail(email);
	if (user && await PasswordService.equals(password, user.password)) {
		return res
			.status(StatusCodes.OK)
			.json(user);
	}
	throw new UnauthorizedError('Incorrect e-mail or password');
};
