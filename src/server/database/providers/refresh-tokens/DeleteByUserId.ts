


import { TABLE_NAMES } from '../../../constants';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';

export const deleteByUserId = async (userId: number) => {
	try {
		await __knex
			.del()
			.from(TABLE_NAMES.refreshTokens)
			.where({ userId });
	} catch (error) {
		throw new DatabaseError(
			'Error while deleting refresh token.'
			, error as Error
		);
	}
};