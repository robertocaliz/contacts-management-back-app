import { TABLE_NAMES } from '../../../constants';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';


const message = 'Error while deleting refresh token.';


export const deleteById = async (id: string) => {
	try {
		const numberOfAffectedRows = await __knex
			.del()
			.from(TABLE_NAMES.refreshTokens)
			.where({ id });
		if (numberOfAffectedRows === 0) {
			throw new DatabaseError(message);
		}
	} catch (error) {
		throw new DatabaseError(message, error as Error);
	}
};