import { TABLE_NAMES } from '../../../constants';
import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { Contact } from '../../models';



export const create = async (contact: Contact): Promise<Id> => {
	try {
		const [id] = await __knex
			.insert(contact)
			.into(TABLE_NAMES.contacts);
		return id;
	} catch (error) {
		throw new DatabaseError(
			'Error trying to create contact!',
			error as Error
		);
	}
};
