import { DatabaseError } from '../../../utils/errors';
import userModel, { User } from '../../models/User';

const message = 'Error updating user!';

export const updateById = async (user: Partial<User>, userId: string) => {
    try {
        const result = await userModel.findByIdAndUpdate(userId, user, {
            new: true,
            projection: { _id: 1, name: 0, contacts: 0, email: 1 },
        });
        if (!result?.isModified) {
            throw new DatabaseError(message);
        }
        return result;
    } catch (error) {
        throw new DatabaseError(message, error as Error);
    }
};
