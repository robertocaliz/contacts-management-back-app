import { TABLE_NAMES } from '../../../constants';
import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { Contact } from '../../models';


export const getById = async (id: Id): Promise<Contact> => {
	try {
		const [contact] = await __knex
			.select('*')
			.from(TABLE_NAMES.contacts)
			.where({ id });
		return contact;
	} catch (error) {
		throw new DatabaseError(
			'Error trying load contact!',
			error as Error
		);
	}
};