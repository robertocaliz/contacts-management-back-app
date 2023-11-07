import { DatabaseError } from '../../../utils/errors';
import { recoveryTokenModel } from '../../models';



export const deleteById = async (id: string) => {
	try {
		const deletedRecoveryToken = await recoveryTokenModel.findByIdAndDelete(id);
		if (!deletedRecoveryToken) {
			throw new DatabaseError(
				`Error deleting recovery token with id ${id}`
			);
		}
	} catch (error) {
		throw new DatabaseError(
			'Error deleting recovery token.',
			error as Error
		);
	}
};