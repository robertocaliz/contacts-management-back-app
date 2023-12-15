
import { DatabaseError } from '../../../utils/errors';
import { refreshTokenModel } from '../../models/refresh-token';



export const deleteById = async (id: string) => {
	try {
		const deletedRefreshToken = await refreshTokenModel.findByIdAndDelete(id);
		return deletedRefreshToken?._id;
	} catch (error) {
		throw new DatabaseError(
			'Error deleting refresh token.',
			error as Error
		);
	}
};