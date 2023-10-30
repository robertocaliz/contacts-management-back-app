
export type ConflictErrorT = {
	name?: string,
	options?: {
		message: string
	}
}


let errors: Array<ConflictErrorT> = [];


const setError = (name: string, message: string) => {
	errors.push({
		name,
		options: {
			message
		}
	});
};


const getErrors = () => {
	const errorsLocal = errors;
	errors = [];
	return errorsLocal;
};


export const ConflictError = {
	setError,
	getErrors
};