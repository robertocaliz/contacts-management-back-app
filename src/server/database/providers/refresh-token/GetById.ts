
import { DatabaseError } from '../../../utils/errors';
import { refreshTokenModel } from '../../models/refresh-token';


export const getById = async ({ refreshTokenId: id }: { refreshTokenId: string }) => {
	try {
		const refreshToken = await refreshTokenModel.findById(id);
		return refreshToken;
	} catch (error) {
		throw new DatabaseError(
			'Error loading refresh token.',
			error as Error
		);
	}
};