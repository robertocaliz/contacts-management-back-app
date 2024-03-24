import { DatabaseError } from '../../../utils/errors';
import { alterationTokenModel } from '../../models/alteration-token';

export const deleteByUserId = async (userId: string) => {
    try {
        return await alterationTokenModel.deleteOne({ userId });
    } catch (error) {
        throw new DatabaseError(
            'Error deleting activation token.',
            error as Error,
        );
    }
};
