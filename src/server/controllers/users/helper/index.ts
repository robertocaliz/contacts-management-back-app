import { User } from '../../../database/models';
import { UsersProvider } from '../../../database/providers';
import { ConflictError } from '../../../functions/conflict-errors';

let user = null;
const { getErrors, setError } = ConflictError;
const { getByEmail } = UsersProvider;

export const userDataAlreadyExists = async ({ email }: Partial<User>) => {
    user = await getByEmail(String(email));
    if (user) {
        setError('email', 'Email já está em uso.');
    }
    const errors = getErrors();
    return {
        exists: errors.length > 0 ? true : false,
        errors,
    };
};
