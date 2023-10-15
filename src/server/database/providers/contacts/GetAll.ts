import { TABLE_NAMES } from '../../../constants';
import { GetAllProps } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import { __knex } from '../../knex';
import { Contact } from '../../models';



export const getAll = async ({ createdBy }: GetAllProps): Promise<Array<Contact>> => {
	try {
		const contacts = await __knex
			.select('*')
			.from(TABLE_NAMES.contacts)
			.where({ createdBy })
			.orderBy('name');
		return contacts;
	} catch (error) {
		throw new DatabaseError(
			'Error trying to load contacts!',
			error as Error
		);
	}
};