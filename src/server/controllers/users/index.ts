import { signup } from './Signup';
import { login } from './Login';
import { getById } from './GetById';
import { updateById } from './UpdateById';

export const UsersController = {
	signup,
	getById,
	login,
	updateById
};