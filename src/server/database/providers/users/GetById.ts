import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import userModel, { User } from '../../models/User';

export const getById = async (id: Id) => {
    try {
        const user = await userModel.findById<User>(id);
        return user;
    } catch (error) {
        throw new DatabaseError('Error loading user.', error as Error);
    }
};
