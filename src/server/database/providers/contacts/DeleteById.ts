import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';



const errorMessage = 'Error deleting contact.';



export const deleteById = async (contactId: Id, loggedUserId: Id) => {
	try {
		const result = await userModel.updateOne({ _id: loggedUserId }, {
			$pull: {
				contacts: {
					_id: contactId
				}
			}
		});
		if (result.modifiedCount === 0) {
			throw new DatabaseError(errorMessage);
		}
	} catch (error) {
		throw new DatabaseError(errorMessage, error as Error);
	}
};