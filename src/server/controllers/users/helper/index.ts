import { User } from '../../../database/models';
import { UsersProvider } from '../../../database/providers';
import { ConflictError } from '../../../functions/conflict-errors';


let user = null;
const { getErrors, setError } = ConflictError;
const { getByEmail } = UsersProvider;



export const getConflictErrorsBeforeSignUp = async ({ email }: Partial<User>) => {
	user = await getByEmail(email as string);
	if (user) {
		setError('email', 'Email já está em uso.');
	}
	return getErrors();
};



export const getConflictErrorBeforeUpdate = async (user: Partial<User>) => {
	return await getConflictErrorsBeforeSignUp(user);
};