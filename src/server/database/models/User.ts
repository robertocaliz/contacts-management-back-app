
import { Schema, model } from 'mongoose';
import { REGEX, USER_STATUS } from '../../constants';
import { Contact, contactsSchema } from './Contact';



export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	accessToken?: string;
	refreshToken?: string;
	activationToken?: string;
	recoveryToken?: string;
	alterationToken?: string;
	contacts?: Array<Contact>;
	status?: string;
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
	contacts: [contactsSchema],
	status: {
		type: String,
		required: true,
		enum: Object.values(USER_STATUS),
		default: USER_STATUS.Inactive
	}
}, {
	timestamps: true
});


const userModel = model('users', usersSchema);


export default userModel;