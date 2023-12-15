

import { DatabaseError } from '../../../utils/errors';
import { refreshTokenModel } from '../../models/refresh-token';


export const deleteByUserId = async (userId: string) => {
	try {
		const result = await refreshTokenModel.deleteOne({ userId });
		return result.deletedCount;
	} catch (error) {
		throw new DatabaseError(
			'Error deleting refresh token.',
			error as Error
		);
	}
};