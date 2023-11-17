import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';

export const getByPhoneNumber = async (phoneNumber: string, loggedUserId: string) => {
	try {
		const [{ contacts }] = await userModel.find({
			_id: loggedUserId
		}, {
			contacts: {
				$elemMatch: {
					phoneNumber
				}
			}
		});
		return contacts.pop();
	} catch (error) {
		throw new DatabaseError(
			'Error loading user.',
			error as Error
		);
	}
};