

import { Schema, Types, model } from 'mongoose';
import { getRandomUUID } from '../../functions/uuid';
import { getExpirationTime } from '../../functions/time';
import { Token } from '../../types';



export interface ActivationToken extends Token { }


const activationTokenSchema = new Schema({
	_id: {
		type: String,
		required: true,
		default: getRandomUUID
	},
	expiresIn: {
		type: Number,
		require: true,
		default: getExpirationTime
	},
	userId: {
		type: Types.ObjectId,
		required: true
	}
});


const activationTokenModel = model('activation_token', activationTokenSchema);


export default activationTokenModel;


