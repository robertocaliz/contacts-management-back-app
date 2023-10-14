import { Id } from '../../../types';
import { Contact } from '../../models';



export const updateById = async (contact: Contact, id: Id) => {
	console.log(contact);
	console.log(id);
};