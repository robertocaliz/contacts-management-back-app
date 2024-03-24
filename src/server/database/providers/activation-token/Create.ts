import { DatabaseError } from '../../../utils/errors';
import {
    ActivationToken,
    activationTokenModel,
} from '../../models/activation-token';

export const create = async (activationToken: ActivationToken) => {
    try {
        const createdActivationToken =
            await activationTokenModel.create(activationToken);
        return createdActivationToken;
    } catch (error) {
        throw new DatabaseError(
            'Error creating activation token',
            error as Error,
        );
    }
};
