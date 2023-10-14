import { Contact } from '../../models';
import { Id } from '../../types';




export const create = async (contact: Contact): Promise<Id> => {
	console.log(contact);
	return 1;
};
