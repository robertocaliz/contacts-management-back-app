import { Id } from '../../../types';
import { User } from '../../models';


export const create = async (user: User): Promise<Id> => {
	console.log(user);
	return 1;
};