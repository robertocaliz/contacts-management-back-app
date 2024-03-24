import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models/recovery-token';

export const deleteByUserId = async (userId: string) => {
    try {
        return await recoveryTokenModel.deleteOne({ userId });
    } catch (error) {
        throw new DatabaseError(
            'Error deleting recovery token.',
            error as Error,
        );
    }
};
