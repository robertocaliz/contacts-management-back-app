import { User } from '../../../database/models';
import { UsersProvider } from '../../../database/providers';
import { ConflictError } from '../../../functions/conflict-errors';


let user = null;
const { getErrors, setError } = ConflictError;
const { getByEmail } = UsersProvider;


export const findConflictErrors = async ({ email }: Partial<User>) => {
	user = await getByEmail(email as string);
	if (user) {
		setError('email', 'Email já está em uso.');
	}
	const errors = getErrors();
	return {
		found: errors.length > 0 ? true : false,
		errors
	};
};