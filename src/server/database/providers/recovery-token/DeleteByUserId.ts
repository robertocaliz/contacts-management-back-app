import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models';



export const deleteByUserId = async (userId: string) => {
	try {
		await recoveryTokenModel.deleteOne({ userId });
	} catch (error) {
		throw new DatabaseError(
			'Error deleting activation token.',
			error as Error
		);
	}
};