import { TABLE_NAMES } from '../../../constants';
import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { User } from '../../models';



export const getById = async (id: Id): Promise<User> => {
	try {
		const [user] = await __knex
			.select(['id','name', 'email'])
			.from(TABLE_NAMES.users)
			.where({ id });
		return user;
	} catch (error) {
		throw new DatabaseError(
			'Error trying to get user!',
			error as Error
		);
	}
};