import { TABLE_NAMES } from '../../constants';
import { __knex } from '../knex';



function* getUniqueMozambiquePhoneNumberGenerator() {
	let phoneNumber = 840000001;
	while (true) {
		yield ++phoneNumber;
	}
}


const phoneNumberGenerator = getUniqueMozambiquePhoneNumberGenerator();



function generateUniqueEmail(existingEmails: Set<string>) {
	let email;
	do {
		email = `user${Math.floor(1000 + Math.random() * 9000)}@example.com`;
	} while (existingEmails.has(email));
	existingEmails.add(email);
	return email;
}


function generateContacts(limit: number) {
	const objectArray = [];
	const existingEmails = new Set<string>();

	for (let i = 0; i < limit; i++) {
		const email = generateUniqueEmail(existingEmails);
		const phoneNumber = phoneNumberGenerator.next().value;

		const object = {
			name: `Name ${i}`,
			email: email,
			phoneNumber: phoneNumber,
			createdBy: i % 2 === 0 ? 1 : 2,
		};
		objectArray.push(object);
	}
	return objectArray;
}

export const seed = async () => {

	const [{ count }] = await __knex(TABLE_NAMES.contacts)
		.count({ count: 'id' });
	if (count === 0) {
		const contacts = generateContacts(100);
		console.log(contacts);
		await __knex
			.insert(contacts)
			.into(TABLE_NAMES.contacts)
			.then(() => {
				console.log('Added contacts!');
			});
	}

};