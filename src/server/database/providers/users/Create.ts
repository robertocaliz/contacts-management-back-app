import { TABLE_NAMES } from '../../../constants';
import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { User } from '../../models';


export const create = async (user: Omit<User, 'accessToken'>): Promise<Id> => {
	try {
		const [id] = await __knex
			.insert(user)
			.into(TABLE_NAMES.users);
		return id;
	} catch (error) {
		throw new DatabaseError(
			'Error trying to create user!',
			error as Error
		);
	}
};