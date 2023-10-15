import { TABLE_NAMES } from '../../../constants';
import { Id } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { Contact } from '../../models';


const message = 'Error trying to update contact!';


export const updateById = async (contact: Contact, id: Id) => {
	try {
		const numberOfAffectedRows = await __knex(TABLE_NAMES.contacts)
			.update(contact)
			.where({ id });
		if (numberOfAffectedRows === 0) {
			throw new DatabaseError(message);
		}
	} catch (error) {
		throw new DatabaseError(message, error as Error);
	}
};