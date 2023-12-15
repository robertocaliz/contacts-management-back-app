

import { Schema, model } from 'mongoose';
import { Token } from '../../../types';
import { tokenSchemaArg } from '../Token';



export interface ActivationToken extends Token { }

const activationTokenSchema = new Schema({
	...tokenSchemaArg
});

export const activationTokenModel = model('activation_token', activationTokenSchema);




