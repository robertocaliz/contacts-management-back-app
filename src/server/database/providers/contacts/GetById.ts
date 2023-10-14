import { Id } from '../../../types';
import { Contact } from '../../models';


export const getById = async (id: Id): Promise<Contact> => {
	console.log(id);
	return {} as Contact;
};