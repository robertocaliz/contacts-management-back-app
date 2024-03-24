import { DatabaseError } from '../../../utils/errors';
import { Contact } from '../../models';
import userModel from '../../models/User';

const errorMessage = 'Error updating contact.';

export const updateById = async (contact: Contact, loggedUserId: string) => {
    try {
        const result = await userModel.updateOne(
            {
                _id: loggedUserId,
                contacts: {
                    $elemMatch: { _id: contact.id },
                },
            },
            {
                $set: {
                    'contacts.$.name': contact.name,
                    'contacts.$.email': contact.email,
                    'contacts.$.phoneNumber': contact.phoneNumber,
                },
            },
        );
        if (result.modifiedCount === 0) {
            throw new DatabaseError(errorMessage);
        }
    } catch (error) {
        throw new DatabaseError('Error updating contact.', error as Error);
    }
};
