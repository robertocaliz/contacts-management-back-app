import { DatabaseError } from '../../../utils/errors';
import { activationTokenModel } from '../../models/activation-token';


const errMessage = 'Error deleting activation token.';


export const deleteByUserId = async (userId: string) => {
	try {
		const result = await activationTokenModel.deleteOne({ userId });
		if (result.deletedCount === 0) { 
			throw new DatabaseError(errMessage);
		}
	} catch (error) {
		throw new DatabaseError(
			errMessage,
			error as Error
		);
	}
};