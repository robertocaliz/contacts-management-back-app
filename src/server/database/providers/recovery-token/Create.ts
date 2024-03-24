import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models/recovery-token';

export const create = async (userId: string) => {
    try {
        const recoveryToken = await recoveryTokenModel.create({ userId });
        return recoveryToken._id;
    } catch (error) {
        throw new DatabaseError(
            'Error creating recovery token',
            error as Error,
        );
    }
};
