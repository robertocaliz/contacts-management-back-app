import { create } from './Create';
import { deleteById } from './DeleteById';
import { getAll } from './GetAll';
import { getById } from './GetById';
import { updateById } from './UpdateById';
import { getByEmail } from './GetByEmail';
import { getByPhoneNumber } from './GetByPhoneNumber';

export const ContactsProvider = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    getByEmail,
    getByPhoneNumber,
};
