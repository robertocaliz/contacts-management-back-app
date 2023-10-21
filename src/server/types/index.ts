


export type Id = number;




export type GetAllProps = {
	createdBy: Id;
	limit?: number;
	page?: number;
	filter?: string
	criteria?: string;
}



export interface QueryProps extends Omit<GetAllProps, 'createdBy'> { }




export type RefreshTokenObj = {
	refreshToken: string;
}