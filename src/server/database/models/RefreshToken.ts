
import { Schema, model, Types } from 'mongoose';
import { Token } from '../../types';



export interface RefreshToken extends Token { }



const refreshTokenSchema = new Schema({
	expiresIn: {
		type: Number,
		required: true
	},
	userId: {
		type: Types.ObjectId,
		required: true
	}
}, {
	timestamps: true
});



const refreshTokenModel = model('refresh_token', refreshTokenSchema);


export default refreshTokenModel;