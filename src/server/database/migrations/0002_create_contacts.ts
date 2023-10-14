import { Knex } from 'knex';
import { REGEX, TABLE_NAMES } from '../../constants';




export const up = async (knex: Knex) => {
	await knex.schema.hasTable(TABLE_NAMES.contacts).then(exists => {
		if (!exists) {
			return knex
				.schema
				.createTable(TABLE_NAMES.contacts, table => {
					table
						.increments('id')
						.primary()
						.index();
					table
						.string('name', 60)
						.checkLength('>=', 3)
						.notNullable();
					table
						.string('email', 100)
						.checkLength('>=', 8)
						.unique()
						.checkRegex(REGEX.db.email);
					table
						.string('phoneNumber')
						.notNullable()
						.unique()
						.checkRegex(REGEX.db.phoneNumber);
					table
						.integer('createdBy')
						.unsigned();
					table
						.foreign('createdBy')
						.references(`${TABLE_NAMES.users}.id`);
				})
				.then(() => {
					console.log(`#Table ${TABLE_NAMES.contacts} created!`);
				});

		}
	});

};



export const down = async (knex: Knex) => {
	return knex
		.schema
		.dropTableIfExists(TABLE_NAMES.contacts)
		.then(() => {
			console.log(`#Table ${TABLE_NAMES.contacts} dropped!`);
		});
};