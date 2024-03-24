import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';

export const getByEmail = async (email: string, loggedUserId: string) => {
    try {
        const [{ contacts }] = await userModel.find(
            {
                _id: loggedUserId,
            },
            {
                contacts: {
                    $elemMatch: {
                        email,
                    },
                },
            },
        );
        return contacts.pop();
    } catch (error) {
        throw new DatabaseError('Error loading user.', error as Error);
    }
};
