import { TABLE_NAMES } from '../../../constants';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';





export const getById = async ({ refreshTokenId: id }: { refreshTokenId: string }) => {
	try {
		const [refreshToken__] = await __knex
			.select('*')
			.from(TABLE_NAMES.refreshTokens)
			.where({ id });
		return refreshToken__;
	} catch (error) {
		throw new DatabaseError(
			'Error while searching refresh token.',
			error as Error
		);
	}
};