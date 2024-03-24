import { Types } from 'mongoose';
import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';

export const getById = async (contactId: string, loggedUserId: string) => {
    try {
        const [{ contacts }] = await userModel.find(
            {
                _id: new Types.ObjectId(loggedUserId),
            },
            {
                contacts: {
                    $elemMatch: {
                        _id: new Types.ObjectId(contactId),
                    },
                },
            },
        );
        return contacts.pop();
    } catch (error) {
        throw new DatabaseError('Error trying load contact!', error as Error);
    }
};
