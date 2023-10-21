import { Knex } from 'knex';
import { TABLE_NAMES } from '../../constants';




export const up = async (knex: Knex) => {
	await knex.schema.hasTable(TABLE_NAMES.refreshTokens).then(exists => {
		if (!exists) {
			return knex
				.schema
				.createTable(TABLE_NAMES.refreshTokens, table => {
					table
						.uuid('id')
						.primary()
						.index()
						.defaultTo(knex.fn.uuid());
					table
						.integer('expiresIn')
						.notNullable();
					table
						.integer('userId')
						.unsigned()
						.index()
						.unique();
					table
						.foreign('userId')
						.references('users.id');
				})
				.then(() => {
					console.log(`#Table ${TABLE_NAMES.refreshTokens} created!`);
				});
		}
	});
};



export const down = async (knex: Knex) => {
	knex
		.schema
		.dropTableIfExists(TABLE_NAMES.refreshTokens)
		.then(() => {
			console.log(`#Table ${TABLE_NAMES.refreshTokens} dropped!`);
		});
};