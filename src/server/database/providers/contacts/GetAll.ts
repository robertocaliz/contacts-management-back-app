import { TABLE_NAMES } from '../../../constants';
import { GetAllProps } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { Contact } from '../../models';



export const getAll = async ({
	createdBy,
	page = 1,
	limit = 20,
	filter = '',
	criteria = 'name'
}: GetAllProps): Promise<Array<Contact>> => {
	try {
		const contacts = await __knex
			.select('*')
			.from(TABLE_NAMES.contacts)
			.where({ createdBy })
			.andWhere(criteria, 'like', `%${filter}%`)
			.orderBy('name')
			.limit(limit)
			.offset((page - 1) * limit);
		return contacts;
	} catch (error) {
		throw new DatabaseError(
			'Error trying to load contacts!',
			error as Error
		);
	}
};