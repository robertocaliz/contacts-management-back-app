import { User } from '../../models';
import { Id } from '../../types';


export const getById = async (id: Id): Promise<User> => {
	console.log(id);
	return {} as User;
};