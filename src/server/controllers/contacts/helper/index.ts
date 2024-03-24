import { Contact } from '../../../database/models';
import { ContactsProvider } from '../../../database/providers';
import { ConflictError } from '../../../functions/conflict-errors';

let contact = null;
const { getByEmail, getByPhoneNumber } = ContactsProvider;
const { getErrors, setError } = ConflictError;

export const getConflictErrorsBeforeCreate = async (
    { email, phoneNumber }: Contact,
    loggedUserId: string,
) => {
    if (email) {
        contact = await getByEmail(email, loggedUserId as string);
        if (contact) {
            setError('email', 'Email já existe.');
        }
    }
    contact = await getByPhoneNumber(phoneNumber, loggedUserId as string);
    if (contact) {
        setError('phoneNumber', 'Telefone já existe.');
    }
    return getErrors();
};

export const getConflictErrorsBeforeUpdate = async (
    { email, phoneNumber, id: contactId }: Contact,
    loggedUserId: string,
) => {
    if (email) {
        contact = await getByEmail(email, loggedUserId as string);
        if (contact && contact._id?.toString() !== contactId) {
            setError('email', 'Email já existe.');
        }
    }
    contact = await getByPhoneNumber(phoneNumber, loggedUserId as string);
    if (contact) {
        if (contact && contact._id?.toString() !== contactId) {
            setError('phoneNumber', 'Telefone já existe.');
        }
    }
    return getErrors();
};
