
import { Schema, model } from 'mongoose';
import { REGEX } from '../../constants';
import { contactsSchema } from './Contact';



export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	accessToken?: string;
	refreshToken?: string;
}


const usersSchema = new Schema({
	name: {
		type: String,
		required: true,
		min: 3,
		max: 60
	},
	email: {
		type: String,
		required: true,
		index: true,
		unique: true,
		min: 8,
		max: 100,
		match: REGEX.db.email,
	},
	password: {
		type: String,
		required: true,
		min: 8,
		max: 72
	},
	contacts: [contactsSchema]
}, {
	timestamps: true
});


const userModel = model('users', usersSchema);


export default userModel;