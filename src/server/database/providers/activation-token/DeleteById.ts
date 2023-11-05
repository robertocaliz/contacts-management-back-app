import { DatabaseError } from '../../../utils/errors';
import activationTokenModel from '../../models/ActivationToken';


const errMessage = 'Error deleting activation token.';


export const deleteById = async (_id: string) => {
	try {
		const activationTokenDeleted = await activationTokenModel.findByIdAndDelete(_id);
		if (!activationTokenDeleted) {
			throw new DatabaseError(errMessage);
		}
	} catch (error) {
		throw new DatabaseError(errMessage, error as Error);
	}
};