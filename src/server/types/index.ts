

export type Id = string;




export type GetAllProps = {
	limit?: number;
	page?: number;
	filter?: string
	criteria?: string;
}



export interface QueryProps extends Omit<GetAllProps, 'createdBy'> { }




export type RefreshTokenObj = {
	refreshToken: string;
}
