import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { ConflictError as ConflictErrorHelper } from '../../functions/conflict-errors';
import { ConflictError } from '../../utils/errors';



export const checkIfEmailExists = async (req: Request<{}, {}, Pick<User, 'email'>>, res: Response) => {
	const { email } = req.body;
	const { getErrors, setError } = ConflictErrorHelper;
	const user = await UsersProvider.getByEmail(email);
	if (user) {
		setError('email', 'Email já está em uso.');
		throw new ConflictError('', getErrors());
	}
	return res
		.status(StatusCodes.OK)
		.send();
};