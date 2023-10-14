import { create } from './Create';
import { deleteById } from './DeleteById';
import { getAll } from './GetAll';
import { getById } from './GetById';
import { updateById } from './UpdateById';

export const ContactsProvider = {
	create,
	getAll,
	getById,
	updateById,
	deleteById
};