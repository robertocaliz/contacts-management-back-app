import { getRandomUUID } from '../../functions/uuid';
import { getExpirationTime } from '../../functions/time';
import { Types } from 'mongoose';



export const tokenSchemaArg = {
	_id: {
		type: String,
		required: true,
		default: getRandomUUID
	},
	expiresIn: {
		type: Number,
		required: true,
		default: getExpirationTime
	},
	userId: {
		type: Types.ObjectId,
		required: true,
		unique: true,
		index: true
	}
};
