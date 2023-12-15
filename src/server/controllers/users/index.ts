import { signup } from './Signup';
import { login } from './Login';
import { getById } from './GetById';
import { updateById } from './UpdateById';
import { checkIfEmailExists } from './CheckIfEmailExists';
import { activate } from './Activate';
import { checkIfEmailExists$ } from './CheckIfEmailExists$';
import { updatePassword } from './UpdatePassword';
import { updateEmailById } from './UpdateEmailById';

export const UsersController = {
	signup,
	getById,
	login,
	updateById,
	checkIfEmailExists,
	activate,
	checkIfEmailExists$,
	updatePassword,
	updateEmailById
};