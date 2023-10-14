import { User } from '../../models';



export const getByEmail = async (email: string): Promise<User> => {
	console.log(email);
	return {} as User;
};
