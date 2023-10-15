import { compare, genSalt, hash } from 'bcryptjs';


const RANDOM_CHARACTERS_NUMBER = 8;


const getHash = async (password: string): Promise<string> => {
	const salt = await genSalt(RANDOM_CHARACTERS_NUMBER);
	return await hash(password, salt);
};



const equals = async (password: string, hash: string): Promise<boolean> => {
	return await compare(password, hash);
};


const text = 'hdh3836ABM67XycLQRrZLJj096TeEWwKkGgS5342J';
const getDefault = () => {
	const characters = [...text];
	let defaultPassword = '';
	for (let i = 0; i < 8; i++) {
		defaultPassword += characters[Math.floor(Math.random() * characters.length)];
	}
	return defaultPassword;
};

export const PasswordService = {
	getHash,
	equals,
	getDefault
};