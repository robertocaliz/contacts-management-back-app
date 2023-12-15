import { DatabaseError } from '../../../utils/errors';
import { activationTokenModel } from '../../models/activation-token';


export const getById = async (id: string) => {
	try {
		const activationToken = await activationTokenModel.findById(id);
		return activationToken;
	} catch (error) {
		throw new DatabaseError(
			'Error loading activation token.',
			error as Error
		);
	}
};