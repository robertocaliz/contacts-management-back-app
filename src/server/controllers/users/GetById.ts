import { Request, Response } from 'express';
import { User } from '../../database/models';
import { UsersProvider } from '../../database/providers';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../../utils/errors';

export const getById = async (req: Request<Partial<User>>, res: Response) => {
    const { id: userId } = req.params;
    const user = await UsersProvider.getById(String(userId));
    if (user) {
        return res.status(StatusCodes.OK).json(user);
    }
    throw new NotFoundError('User not found!');
};
