import { create } from './Create';
import { getByEmail } from './GetByEmail';
import { getById } from './GetById';
import { updateById } from './UpdateById';

export const UsersProvider = {
	create,
	getById,
	getByEmail,
	updateById
};