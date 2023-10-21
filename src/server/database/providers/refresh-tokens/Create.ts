import { TABLE_NAMES } from '../../../constants';
import { __knex } from '../../knex';
import { getExpirationTime } from '../../../functions/refresh-token';
import { DatabaseError } from '../../../utils/errors';
import { getRandomUUID } from '../../../functions/uuid';



export const create = async (userId: number) => {
	const expiresIn = getExpirationTime();
	const id = getRandomUUID();
	try {
		await __knex
			.insert({ id, expiresIn, userId })
			.into(TABLE_NAMES.refreshTokens);
		return id;
	} catch (error) {
		throw new DatabaseError(
			'Error while creating refresh token.',
			error as Error
		);
	}
};