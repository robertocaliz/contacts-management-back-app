export type ConflictErrorT = {
    path?: string;
    message?: string;
};

let errors: Array<ConflictErrorT> = [];

const setError = (path: string, message: string) => {
    errors.push({
        path,
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
