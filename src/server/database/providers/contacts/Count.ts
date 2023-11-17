import { DatabaseError } from '../../../utils/errors';
import userModel, { User } from '../../models/User';



export const count = async (userId: string) => {
	try {
		const user = await userModel.findById<User>(userId);
		return user?.contacts?.length ?? 0;
	} catch (error) {
		throw new DatabaseError(
			'Error counting contacts.',
			error as Error
		);
	}
};