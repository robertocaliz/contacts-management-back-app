
export interface User {
	id: number;
	name: string;
	email: string;
	password: string;
	accessToken?: string;
}


const users: User[] = [];


function* getIdGenerator() {
	let id = 0;
	while (true) {
		yield ++id;
	}
}

const idGenerator = getIdGenerator();


const add = (user: User) => {
	user.id = <number>idGenerator.next().value;
	users.push(user);
	console.log(users);
};


const getById = (id: number) => {
	return users.find(user => user.id == id);
};


const getByEmail = (email: string) => {
	const user = users.find(user => user.email === email);
	return user;
};



const getAll = () => {
	return users;
};


const UsersRepo = {
	getByEmail,
	getAll,
	getById,
	add
};


export default UsersRepo;