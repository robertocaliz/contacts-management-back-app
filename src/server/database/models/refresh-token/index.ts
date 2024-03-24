import { Schema, model } from 'mongoose';
import { Token } from '../../../types';
import { tokenSchemaArg } from '../Token';

export interface RefreshToken extends Token {}

const refreshTokenSchema = new Schema({
    ...tokenSchemaArg,
});

export const refreshTokenModel = model('refresh_token', refreshTokenSchema);
