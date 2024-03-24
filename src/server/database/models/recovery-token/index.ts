import { Schema, model } from 'mongoose';
import { Token } from '../../../types';
import { tokenSchemaArg } from '../Token';

export interface RecoveryToken extends Token {}

const recoveryTokenSchema = new Schema({
    ...tokenSchemaArg,
});

export const recoveryTokenModel = model('recovery-token', recoveryTokenSchema);
