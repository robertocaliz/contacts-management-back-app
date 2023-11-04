
import { create } from './Create';
import { deleteById } from './DeleteById';
import { getById } from './GetById';
import { deleteByUserId } from './DeleteByUserId';


export const RefreshTokenProvider = {
	create,
	getById,
	deleteById,
	deleteByUserId
};