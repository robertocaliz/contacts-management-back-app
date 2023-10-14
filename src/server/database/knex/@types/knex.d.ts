import { Contact, User } from '../../models';



declare module 'knex/types/tables' {

	interface Tables {
		users: User;
		contacts: Contact;
	}

}