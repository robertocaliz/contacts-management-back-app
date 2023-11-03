

import { Schema, model } from 'mongoose';
import { Token } from '../../types';
import { refreshTokenSchemaBody } from './RefreshToken';



export interface ActivationToken extends Token { }


const activationTokenSchema = new Schema(refreshTokenSchemaBody);


const activationTokenModel = model('activation_token', activationTokenSchema);


export default activationTokenModel;


