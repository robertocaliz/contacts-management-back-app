

import { DatabaseError } from '../../../utils/errors';
import refreshTokenModel from '../../models/RefreshToken';

export const deleteByUserId = async (userId: number) => {
	try {
		const deletedRefreshToken = await refreshTokenModel.findByIdAndDelete(userId);
		return deletedRefreshToken?._id;
	} catch (error) {
		throw new DatabaseError(
			'Error while deleting refresh token.'
			, error as Error
		);
	}
};