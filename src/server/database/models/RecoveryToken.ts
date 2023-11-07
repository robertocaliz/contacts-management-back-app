import { model } from 'mongoose';
import { tokenSchema } from './RefreshToken';
import { Token } from '../../types';



export interface RecoveryToken extends Token { }



const recoveryTokenSchema = tokenSchema;



export const recoveryTokenModel = model('recovery-token', recoveryTokenSchema);
