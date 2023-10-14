import { Id } from '../../../types';
import { Contact } from '../../models';





export const create = async (contact: Contact): Promise<Id> => {
	console.log(contact);
	return 1;
};
