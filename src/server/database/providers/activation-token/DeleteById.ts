import { DatabaseError } from '../../../utils/errors';
import { activationTokenModel } from '../../models/activation-token';


export const deleteById = async (_id: string) => {
	try {
		const deletedActivationToken = await activationTokenModel.findByIdAndDelete(_id);
		return deletedActivationToken;
	} catch (error) {
		throw new DatabaseError(
			'Error deleting activation token.',
			error as Error
		);
	}
};