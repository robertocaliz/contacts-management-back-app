import { Contact } from '../../models';
import { Id } from '../../types';



export const getById = async (id: Id): Promise<Contact> => {
	console.log(id);
	return {} as Contact;
};