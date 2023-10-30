import { User } from '../../../database/models';
import { UsersProvider } from '../../../database/providers';
import { ConflictError } from '../../../functions/conflict-errors';


let user = null;
const { getErrors, setError } = ConflictError;
const { getByEmail } = UsersProvider;


export const getConflictErrorsBeforeSignUp = async ({ email }: User) => {

	user = await getByEmail(email);

	
	if (user) {
		setError('email', 'Email já está em uso.');
	}


	return getErrors();

};