import { Request, Response } from 'express';
import { User } from '../../database/models';
import {
    ActivationTokenProvider,
    UsersProvider,
} from '../../database/providers';
import { BadRequestError } from '../../utils/errors';
import { StatusCodes } from 'http-status-codes';
import { expired } from '../../functions/time';
import { USER_STATUS } from '../../constants';

export const activate = async (
    req: Request<Pick<User, 'activationToken'>>,
    res: Response,
) => {
    const { activationToken } = req.params;
    const deletedActivationToken = await ActivationTokenProvider.deleteById(
        activationToken as string,
    );
    if (!deletedActivationToken || expired(deletedActivationToken.expiresIn)) {
        throw new BadRequestError('Invalid or expired activation token.');
    }
    await UsersProvider.updateById(
        { status: USER_STATUS.Active },
        String(deletedActivationToken.userId),
    ).then(async () => {
        res.status(StatusCodes.OK).send();
    });
};
