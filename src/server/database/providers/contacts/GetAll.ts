import { GetAllProps } from '../../../types';
import { Contact } from '../../models';



export const getAll = async ({ createdBy }: GetAllProps): Promise<Array<Contact>> => {
	console.log(createdBy);
	return [];
};