import { StatusCodes } from 'http-status-codes';



export class AppError extends Error {
	public statusCode?: number;
	public error?: Error;
	constructor(name: string, statusCode?: number, message?: string, error?: Error) {
		super(message);
		this.statusCode = statusCode;
		this.error = error;
		this.name = name;
	}
}



export class DatabaseError extends AppError {
	constructor(message?: string, error?: Error) {
		super('DatabaseError', undefined, message, error);
	}
}



export class NotFoundError extends AppError {
	constructor(message?: string, error?: Error) {
		super('NotFoundError', StatusCodes.NOT_FOUND, message, error);
	}
}



export class UnauthorizedError extends AppError {
	constructor(message?: string, error?: Error) {
		super('UnauthorizedError', StatusCodes.UNAUTHORIZED, message, error);
	}
}



export class FieldNotFoundError extends AppError {
	constructor(message?: string, error?: Error) {
		super('FieldNotFoundError', undefined, message, error);
	}
}



export class EmptyArrayError extends AppError {
	constructor(message?: string, error?: Error) {
		super('EmptyArrayError', undefined, message, error);
	}
}