import { create } from './Create';
import { deleteById } from './DeleteById';
import { getAll } from './GetAll';
import { getById } from './GetById';
import { updateById } from './UpdateById';

export const ContactsController = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
};
