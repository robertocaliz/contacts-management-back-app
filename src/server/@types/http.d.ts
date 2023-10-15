import { IUserData } from '../shared/services';


declare module 'http' {
	interface IncomingHttpHeaders {
		userData: IUserData
	}
}