import { Contact, RefreshToken, User } from '../../models';



declare module 'knex/types/tables' {
	interface Tables {
		users: User;
		contacts: Contact;
		refresh_tokens: RefreshToken;
	}

}


declare module 'knex/types/result' {
	interface Registry {
		Count: number;
	}
}