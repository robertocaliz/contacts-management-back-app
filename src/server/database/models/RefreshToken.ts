
import { Schema, model, Types } from 'mongoose';


export interface RefreshToken {
	id: string;
	expiresIn: number;
	userId: number;
}



const refreshTokensSchema = new Schema({
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



const refreshTokenModel = model('refresh_tokens', refreshTokensSchema);


export default refreshTokenModel;