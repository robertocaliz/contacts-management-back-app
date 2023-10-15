import { StatusCodes } from 'http-status-codes';



export class AppError extends Error {
	public statusCode: number;
	public error?: Error;
	constructor(statusCode: number, name: string, message?: string, error?: Error) {
		super(message);
		this.statusCode = statusCode;
		this.error = error;
		this.name = name;
	}
}



export class DatabaseError extends AppError {
	constructor(message?: string, error?: Error) {
		super(StatusCodes.INTERNAL_SERVER_ERROR, 'DatabaseError', message, error);
	}
}



export class NotFoundError extends AppError {
	constructor(message?: string, error?: Error) {
		super(StatusCodes.NOT_FOUND, 'NotFoundError', message, error);
	}
}



export class UnauthorizedError extends AppError {
	constructor(message?: string, error?: Error) {
		super(StatusCodes.UNAUTHORIZED, 'UnauthorizedError', message, error);
	}
}



export class FieldNotFoundError extends AppError {
	constructor(message?: string, error?: Error) {
		super(StatusCodes.INTERNAL_SERVER_ERROR, 'FieldNotFoundError', message, error);
	}
}