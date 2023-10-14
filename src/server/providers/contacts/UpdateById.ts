import { Contact } from '../../models';
import { Id } from '../../types';



export const updateById = async (contact: Contact, id: Id) => {
	console.log(contact);
	console.log(id);
};