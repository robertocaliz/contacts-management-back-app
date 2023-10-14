


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
	constructor(statusCode: number, message?: string, error?: Error) {
		super(statusCode, message, error);
	}
}



export class NotFoundError extends AppError {
	constructor(statusCode: number, message?: string, error?: Error) {
		super(statusCode, message, error);
	}
}



export class UnauthorizedError extends AppError {
	constructor(statusCode: number, message?: string, error?: Error) {
		super(statusCode, message, error);
	}
}