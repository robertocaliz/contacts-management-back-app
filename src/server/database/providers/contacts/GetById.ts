

import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';



export const getById = async (contactId: string, loggedUserId: string) => {
	try {
		const [{ contacts }] = await userModel.find({ _id: loggedUserId }, {
			contacts: {
				$elemMatch: {
					_id: contactId
				}
			}
		});
		console.log(contacts);
		return contacts.pop();
	} catch (error) {
		throw new DatabaseError(
			'Error trying load contact!',
			error as Error
		);
	}
};