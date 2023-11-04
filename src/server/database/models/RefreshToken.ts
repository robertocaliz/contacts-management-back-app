
import { Schema, model, Types } from 'mongoose';
import { Token } from '../../types';
import { getRandomUUID } from '../../functions/uuid';
import { getExpirationTime } from '../../functions/time';



export interface RefreshToken extends Token { }


export const refreshTokenSchemaBody = {
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
		unique: true
	}
};

const refreshTokenSchema = new Schema(refreshTokenSchemaBody);


const refreshTokenModel = model('refresh_token', refreshTokenSchema);


export default refreshTokenModel;