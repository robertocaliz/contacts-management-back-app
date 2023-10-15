import { FieldNotFoundError } from '../../utils/errors';




// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteObjField = (obj: any, fieldNames: string[]): void => {
	for (const fieldName of fieldNames) {
		if (!(fieldName in obj)) {
			throw new FieldNotFoundError(`Field ${fieldName} does not exist in the provided object!`);
		}
		delete obj[fieldName];
	}
};
