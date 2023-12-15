import { DatabaseError } from '../../../utils/errors';
import { AlterationToken, alterationTokenModel } from '../../models/alteration-token';



export const create = async (alterationToken: AlterationToken) => {
	try {
		const createdAlterationToken = await alterationTokenModel.create(alterationToken);
		return createdAlterationToken._id;
	} catch (error) {
		throw new DatabaseError(
			'Error creating alteration token.',
			error as Error
		);
	}
};