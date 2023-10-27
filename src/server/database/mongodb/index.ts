import mongoose from 'mongoose';


const { USER, PASSWORD } = process.env;


const connection = async () => {
	await mongoose
		.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.ipyyfsl.mongodb.net/?retryWrites=true&w=majority`)
		.then(() => {
			console.log('connection established with the database!');
		})
		.catch(error => {
			console.error(error);
		});
};

connection();