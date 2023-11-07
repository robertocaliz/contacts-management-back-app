import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models';



export const getById = async (id: string) => {
	try {
		const recoveryToken = await recoveryTokenModel.findById(id);
		return recoveryToken;
	} catch (error) {
		throw new DatabaseError(
			'Error loading recovery token.',
			error as Error
		);
	}
};