import { TABLE_NAMES } from '../../../constants';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { User } from '../../models';




export const getByEmail = async (email: string): Promise<User> => {
	try {
		const [user] = await __knex
			.select(['id', 'name', 'email', 'password'])
			.from(TABLE_NAMES.users)
			.where({ email });
		return user;
	} catch (error) {
		throw new DatabaseError(
			'Error trying to get user!',
			error as Error
		);
	}
};
