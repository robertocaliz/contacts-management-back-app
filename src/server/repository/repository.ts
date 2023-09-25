
export interface Contact {
	id: number;
	name: string;
	phoneNumber: string;
	email: string;
}


let contacts: Array<Contact> = [];


function* getIdGenerator() {
	let id = 0;
	while (true) {
		yield ++id;
	}
}

const idGenerator = getIdGenerator();


function save(contact: Contact) {
	const id = <number>idGenerator.next().value;
	contacts.push({ ...contact, id });
	return id;
}


function getAll() {
	return contacts;
}


function getById(id: number) {
	const contact = contacts.find(contact => contact.id == id);
	console.log(contact);
	return contact;
}


function updateById(contactParam: Contact, id: number) {
	contacts.every((contact, index) => {
		if (contact.id == id) {
			contacts[index] = contactParam;
			return false;
		}
		return true;
	});
}


function deleteById(id: number) {
	contacts = contacts.filter(contact => contact.id != id);
}


export const ContactsRepo = {
	save,
	getAll,
	getById,
	updateById,
	deleteById
};