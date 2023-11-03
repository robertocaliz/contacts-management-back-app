
import { getExpirationTime } from '../../../functions/time';
import { DatabaseError } from '../../../utils/errors';
import refreshTokenModel from '../../models/RefreshToken';




export const create = async (userId: number) => {
	const expiresIn = getExpirationTime();
	try {
		const refreshToken = await refreshTokenModel.create({ expiresIn, userId });
		return refreshToken._id;
	} catch (error) {
		throw new DatabaseError(
			'Error creating refresh token.',
			error as Error
		);
	}
};