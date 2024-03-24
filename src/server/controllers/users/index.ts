import { signup } from './Signup';
import { login } from './Login';
import { getById } from './GetById';
import { updateById } from './UpdateById';
import { checkIfEmailExists } from './CheckIfEmailExists';
import { activate } from './Activate';
import { recoverSignup } from './RecoverSignup';
import { updatePasswordById } from './UpdatePasswordById';
import { updateEmailById } from './UpdateEmailById';

export const UsersController = {
    signup,
    getById,
    login,
    updateById,
    checkIfEmailExists,
    activate,
    recoverSignup,
    updatePasswordById,
    updateEmailById,
};
