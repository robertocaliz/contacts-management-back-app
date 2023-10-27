import { DatabaseError } from '../../../utils/errors';
import userModel, { User } from '../../models/User';


const message = 'Error updating user!';


export const updateById = async (user: User, userId: string) => {
	try {
		const result = await userModel.findByIdAndUpdate(userId, user);
		if (!result?.isModified) {
			throw new DatabaseError(message);
		}
	} catch (error) {
		throw new DatabaseError(message, error as Error);
	}
};