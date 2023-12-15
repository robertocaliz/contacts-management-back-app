import { DatabaseError } from '../../../utils/errors';
import { refreshTokenModel } from '../../models/refresh-token';



export const create = async (userId: string) => {
	try {
		const refreshToken = await refreshTokenModel.create({ userId });
		return refreshToken;
	} catch (error) {
		throw new DatabaseError(
			'Error creating refresh token.',
			error as Error
		);
	}
};