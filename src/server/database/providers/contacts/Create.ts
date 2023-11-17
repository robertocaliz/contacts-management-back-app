import { DatabaseError } from '../../../utils/errors';
import { Contact } from '../../models';
import userModel from '../../models/User';


const errMessage = 'Error creating contact.';


export const create = async (contact: Contact, loggedUserId: string) => {
	try {
		const result = await userModel.updateOne({ _id: loggedUserId }, {
			$push: {
				contacts: {
					$each: [contact],
					$sort: { name: 1 }
				}
			}
		});
		if (result.modifiedCount === 0) {
			throw new DatabaseError(errMessage);
		}
	} catch (error) {
		throw new DatabaseError(errMessage, error as Error);
	}
};
