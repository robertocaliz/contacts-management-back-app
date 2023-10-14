import { Knex } from 'knex';
import path from 'path';
import { config } from 'dotenv';


config({ path: '../../../../.env' });


export const development: Knex.Config = {
	client: 'mysql',
	useNullAsDefault: true,
	connection: {
		host: process.env.HOST,
		port: Number(process.env.DATABASE_PORT),
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE_NAME
	},
	migrations: {
		directory: path.resolve(__dirname, '..', 'migrations')
	},
	seeds: {
		directory: path.resolve(__dirname, '..', 'seeds')
	}
};


export const production: Knex.Config = { ...development };