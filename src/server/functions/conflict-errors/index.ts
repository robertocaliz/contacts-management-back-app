export type ConflictErrorT = {
    name?: string;
    path?: string;
    message?: string;
};

let errors: Array<ConflictErrorT> = [];

const setError = (name: string, message: string) => {
    errors.push({
        name,
        message,
    });
};

const getErrors = () => {
    const errorsLocal = errors;
    errors = [];
    return errorsLocal;
};

export const ConflictError = {
    setError,
    getErrors,
};
