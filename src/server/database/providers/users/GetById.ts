import { Id } from '../../../types';
import { User } from '../../models';



export const getById = async (id: Id): Promise<User> => {
	console.log(id);
	return {} as User;
};