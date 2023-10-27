import mongoose from 'mongoose';


const databaseUri = process.env.DATABASE_URI as string;


const connection = async () => {
	await mongoose
		.connect(databaseUri)
		.then(() => {
			console.log('connection established with the database!');
		})
		.catch(error => {
			console.error(error);
		});
};

connection();