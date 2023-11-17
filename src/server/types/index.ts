import { User } from '../database/models';


export type Id = string;




export type GetAllProps = {
	per_page?: number;
	page?: number;
	filter?: string
	criteria?: string;
}



export interface QueryProps extends Omit<GetAllProps, 'createdBy'> { }




export type RefreshTokenObj = {
	refreshToken: string;
}



export interface Token {
	_id?: string;
	expiresIn?: number;
	userId: string;
}




export type EmailBodyDetails = Pick<User, 'name' | 'activationToken' | 'email'>
