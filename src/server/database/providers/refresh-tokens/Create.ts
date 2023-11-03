
import { DatabaseError } from '../../../utils/errors';
import refreshTokenModel from '../../models/RefreshToken';



export const create = async (userId: number) => {
	try {
		const refreshToken = await refreshTokenModel.create({ userId });
		return refreshToken._id;
	} catch (error) {
		throw new DatabaseError(
			'Error creating refresh token.',
			error as Error
		);
	}
};