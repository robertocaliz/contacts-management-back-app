import { TABLE_NAMES } from '../../../constants';
import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { User } from '../../models';


const message = 'Error trying to update user!';


export const updateById = async (user: User, id: Id) => {
	try {
		const numberOfAffectedRows = await __knex(TABLE_NAMES.users)
			.update(user)
			.where({ id });
		if (numberOfAffectedRows === 0) {
			throw new DatabaseError(message);
		}
	} catch (error) {
		throw new DatabaseError(message, error as Error);
	}
};