import { StatusCodes } from 'http-status-codes';



export class AppError extends Error {
	public statusCode: number;
	public error?: Error;
	constructor(statusCode: number, message?: string, error?: Error) {
		super(message);
		this.statusCode = statusCode;
		this.error = error;
	}
}



export class DatabaseError extends AppError {
	constructor(message?: string, error?: Error) {
		super(StatusCodes.INTERNAL_SERVER_ERROR, message, error);
	}
}



export class NotFoundError extends AppError {
	constructor(message?: string, error?: Error) {
		super(StatusCodes.NOT_FOUND, message, error);
	}
}



export class UnauthorizedError extends AppError {
	constructor(message?: string, error?: Error) {
		super(StatusCodes.UNAUTHORIZED, message, error);
	}
}