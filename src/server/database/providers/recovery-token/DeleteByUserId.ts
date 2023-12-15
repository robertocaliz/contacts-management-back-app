import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models/recovery-token';



export const deleteByUserId = async (userId: string) => {
	try {
		const result = await recoveryTokenModel.deleteOne({ userId });
		if (result.deletedCount === 0) {
			throw new DatabaseError(`Error deleting recovery token with userId ${userId}.`);
		}
	} catch (error) {
		throw new DatabaseError(
			'Error deleting recovery token.',
			error as Error
		);
	}
};