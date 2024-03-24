import { DatabaseError } from '../../../utils/errors';
import { alterationTokenModel } from '../../models/alteration-token';

export const deleteById = async (alterationTokenId: string) => {
    try {
        const deletedAlterationToken =
            await alterationTokenModel.findByIdAndDelete(alterationTokenId);
        return deletedAlterationToken;
    } catch (error) {
        throw new DatabaseError(
            'Error deleting alteration token.',
            error as Error,
        );
    }
};
