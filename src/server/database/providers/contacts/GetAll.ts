import { GetAllProps } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';



export const getAll = async (loggedUserId: string, { page = 1, limit = 2 }: GetAllProps) => {
	const offset = (page - 1) * limit;
	limit = (page == 1) ? limit : (limit * 2);
	try {
		const [{ contacts }] = await userModel.find({ _id: loggedUserId }, {
			contacts: { $slice: [offset, limit] }
		});
		return contacts;
	} catch (error) {
		throw new DatabaseError('Error loading contacts.', error as Error);
	}
};