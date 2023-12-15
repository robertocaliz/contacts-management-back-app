import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models/recovery-token';



export const deleteById = async (recoveryTokenId: string) => {
	try {
		return await recoveryTokenModel.findByIdAndDelete(recoveryTokenId);
	} catch (error) {
		throw new DatabaseError(
			'Error deleting recovery token.',
			error as Error
		);
	}
};