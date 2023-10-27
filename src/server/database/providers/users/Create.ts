import { DatabaseError } from '../../../utils/errors';
import userModel, { User } from '../../models/User';



export const create = async (user: Omit<User, 'accessToken'>) => {
	try {
		const userCreated = await userModel.create(user);
		return userCreated._id;
	} catch (error) {
		throw new DatabaseError(
			'Error creating user!',
			error as Error
		);
	}
};