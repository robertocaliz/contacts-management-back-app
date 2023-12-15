import { Request, Response } from 'express';
import { User } from '../../database/models';
import { StatusCodes } from 'http-status-codes';
import { AlterationTokenProvider } from '../../database/providers/alteration-token';
import { BadRequestError } from '../../utils/errors';
import { UsersProvider } from '../../database/providers';
import { expired } from '../../functions/time';



export const updateEmailById = async (req: Request<User>, res: Response) => {
	const { alterationToken } = req.params;
	const deletedAlterationToken = await AlterationTokenProvider.deleteById(
		alterationToken as string
	);
	if (!deletedAlterationToken || expired(deletedAlterationToken.expiresIn)) {
		throw new BadRequestError('Invalid or expired alteration token.');
	}
	const { newEmail, userId } = deletedAlterationToken;
	await UsersProvider.updateById({ email: newEmail }, userId as string);
	return res
		.status(StatusCodes.OK)
		.json({ newEmail });
};