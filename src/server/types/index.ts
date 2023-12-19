import { User } from '../database/models';


export type Id = string;



export interface QueryProps {
	per_page?: number;
	page?: number;
	filter?: string
	criteria?: string;
}




export type RefreshTokenObj = {
	refreshToken: string;
}



export interface Token {
	_id?: string;
	expiresIn?: number;
	userId: string;
}




export type EmailBodyDetails = Pick<User, 'name' | 'activationToken' | 'email'>
