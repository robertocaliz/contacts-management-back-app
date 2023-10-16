import { TABLE_NAMES } from '../../constants';
import { __knex } from '../knex';



function* getUniqueMozambiquePhoneNumberGenerator() {
	let phoneNumber = 840000001;
	while (true) {
		yield ++phoneNumber;
	}
}


const phoneNumberGenerator = getUniqueMozambiquePhoneNumberGenerator();



function* getUniqueEmailGenerator() {
	let count = 0;
	while (true) {
		yield `contact.email${++count}@gmail.com`;
	}
}


const uniqueEmailGenerator = getUniqueEmailGenerator();


function generateContacts(limit: number) {

	const contacts = [];

	for (let i = 0; i < limit; i++) {

		const email = uniqueEmailGenerator.next().value;
		const phoneNumber = phoneNumberGenerator.next().value;

		const contact = {
			name: `Name ${i}`,
			email: email,
			phoneNumber: phoneNumber,
			createdBy: i % 2 === 0 ? 1 : 2,
		};
		contacts.push(contact);
	}
	return contacts;
}

export const seed = async () => {

	const LIMIT = 1000;

	const [{ count }] = await __knex(TABLE_NAMES.contacts)
		.count({ count: 'id' });

	if (count === 0) {
		const contacts = generateContacts(LIMIT);
		await __knex
			.insert(contacts)
			.into(TABLE_NAMES.contacts)
			.then(() => {
				console.log('Added contacts!');
			});
	}

};