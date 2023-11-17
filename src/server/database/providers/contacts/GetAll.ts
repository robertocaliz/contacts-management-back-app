import { GetAllProps } from '../../../types';
import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';


export const getAll = async (loggedUserId: string, { page = 1, per_page = 5 }: GetAllProps) => {
	const start = (page - 1) * Number(per_page);
	try {
		const [{ contacts }] = await userModel.find({ _id: loggedUserId }, {
			contacts: {
				$slice: [start, Number(per_page)]
			}
		});
		return contacts;
	} catch (error) {
		throw new DatabaseError(
			'Error loading contacts.',
			error as Error
		);
	}
};