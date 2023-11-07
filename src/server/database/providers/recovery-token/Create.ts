import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models';


export const create = async (userId: string) => {
	try {
		const recoveryToken = await recoveryTokenModel.create({ userId });
		return recoveryToken;
	} catch (error) {
		throw new DatabaseError(
			'Error creating recovery token',
			error as Error
		);
	}
};