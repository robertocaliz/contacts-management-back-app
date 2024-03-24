import { EmptyArrayError, FieldNotFoundError } from '../../utils/errors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteObjField = (
    obj: Record<string, any>,
    fieldNames: string[] = [],
): void => {
    if (fieldNames.length === 0) {
        throw new EmptyArrayError(
            "Array 'fieldNames' must contain at least one element!",
        );
    }
    for (const fieldName of fieldNames) {
        if (!(fieldName in obj)) {
            throw new FieldNotFoundError(
                `Field '${fieldName}' does not exist in the provided object!`,
            );
        }
        delete obj[fieldName];
    }
};
