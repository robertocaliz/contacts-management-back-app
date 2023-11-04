import { DatabaseError } from '../../../utils/errors';
import { ActivationToken } from '../../models';
import activationTokenModel from '../../models/ActivationToken';




export const create = async (activationToken: ActivationToken) => {
	try {
		const createdActivationToken = await activationTokenModel.create(activationToken);
		return createdActivationToken;
	} catch (error) {
		throw new DatabaseError(
			'Error creating activation token',
			error as Error
		);
	}
};