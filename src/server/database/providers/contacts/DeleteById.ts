import { TABLE_NAMES } from '../../../constants';
import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';


const message = 'Error trying to delete contact!';


export const deleteById = async (id: Id) => {
	try {
		const numberOfAffectedRows = await __knex
			.del()
			.from(TABLE_NAMES.contacts)
			.where({ id });
		if (numberOfAffectedRows === 0) {
			throw new DatabaseError(message);
		}
	} catch (error) {
		throw new DatabaseError(message, error as Error);
	}
};