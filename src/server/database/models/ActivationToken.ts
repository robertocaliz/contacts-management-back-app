

import { model } from 'mongoose';
import { Token } from '../../types';
import { tokenSchema } from './RefreshToken';



export interface ActivationToken extends Token { }


const activationTokenSchema = tokenSchema;


const activationTokenModel = model('activation_token', activationTokenSchema);


export default activationTokenModel;


