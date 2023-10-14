import { User } from '../../models';
import { Id } from '../../types';


export const create = async (user: User): Promise<Id> => {
	console.log(user);
	return 1;
};