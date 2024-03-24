import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';

export const getByEmail = async (email: string) => {
    try {
        const user = await userModel.findOne({ email });
        return user;
    } catch (error) {
        throw new DatabaseError('Error loading user.', error as Error);
    }
};
