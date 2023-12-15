

import { Schema, model } from 'mongoose';
import { Token } from '../../../types';
import { tokenSchemaArg } from '../Token';
import { REGEX } from '../../../constants';


export interface AlterationToken extends Token {
	newEmail: string;
}

const alterationTokenSchema = new Schema({
	...tokenSchemaArg,
	newEmail: {
		type: String,
		min: 8,
		max: 100,
		match: REGEX.db.email,
	}
});

export const alterationTokenModel = model('alteration_token', alterationTokenSchema);



