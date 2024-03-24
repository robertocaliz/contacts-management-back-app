import { create } from './Create';
import { deleteById } from './DeleteById';
import { deleteByUserId } from './DeleteByUserId';
import { getById } from './GetById';

export const RecoveryTokenProvider = {
    create,
    getById,
    deleteById,
    deleteByUserId,
};
