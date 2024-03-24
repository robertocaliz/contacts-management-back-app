import { Schema, model } from 'mongoose';
import { REGEX } from '../../constants';

export interface Contact {
    id: string;
    name: string;
    email?: string;
    phoneNumber: string;
}

const contactsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 60,
        },
        email: {
            type: String,
            index: true,
            unique: true,
            min: 8,
            max: 100,
            match: REGEX.db.email,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            match: REGEX.db.phoneNumber,
        },
    },
    {
        timestamps: true,
    },
);

const contactModel = model('contacts', contactsSchema);

export { contactModel, contactsSchema };
