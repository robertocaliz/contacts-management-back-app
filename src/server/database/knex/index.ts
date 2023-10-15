

import knex, { Knex } from 'knex';
import { development, production } from './Environments';


const environments: Record<string, Knex.Config> = {
	development,
	production
};


const getEnv = () => {
	return environments[process.env.NODE_ENV as string];
};


export const __knex = knex(getEnv());