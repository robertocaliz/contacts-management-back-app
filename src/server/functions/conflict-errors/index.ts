
export type ConflictErrorT = {
<<<<<<< HEAD
	name?: string,
=======
	path?: string,
>>>>>>> 5b9ed56 (modify modules)
	message?: string
}


let errors: Array<ConflictErrorT> = [];


<<<<<<< HEAD
const setError = (name: string, message: string) => {
	errors.push({
		name,
=======
const setError = (path: string, message: string) => {
	errors.push({
		path,
>>>>>>> 5b9ed56 (modify modules)
		message
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