import { Knex } from 'knex';
import { TABLE_NAMES } from '../../constants';



export const up = async (knex: Knex) => {
	await knex.schema.hasTable(TABLE_NAMES.users).then(exists => {
		if (!exists) {
			return knex
				.schema
				.createTable(TABLE_NAMES.users, table => {

					table
						.increments('id')
						.primary()
						.index();

					table
						.string('name', 60)
						.notNullable();

					table
						.string('email', 100)
						.notNullable()
						.index()
						.unique();
					table
						.string('password', 72)
						.notNullable();
				})
				.then(() => {
					console.log(`#Table ${TABLE_NAMES.users} created!`);
				});
		}
	});
};


export const down = async (knex: Knex) => {
	return knex
		.schema
		.dropTableIfExists(TABLE_NAMES.users)
		.then(() => {
			console.log(`#Table ${TABLE_NAMES.users} dropped!`);
		});
};