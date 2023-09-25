import { Request, Response } from 'express';
import { server } from './server/server';
import { StatusCodes } from 'http-status-codes';
import { Contact, ContactsRepo } from './server/repository';


let contactId: number;


server
	.post('/contacts',
		(req: Request<{}, {}, Contact>, res: Response) => {
			const contact = req.body;
			contactId = ContactsRepo.save(contact);
			res
				.status(StatusCodes.CREATED)
				.json(contactId);
		});

server
	.get('/contacts',
		(req: Request, res: Response) => {
			res
				.status(StatusCodes.OK)
				.json(ContactsRepo.getAll());
		});


server
	.get('/contacts/:id',
		(req: Request<Contact>, res: Response) => {
			const id = req.params.id;
			const contact = ContactsRepo.getById(id);
			res
				.status(StatusCodes.OK)
				.json(contact);
		});


server
	.put('/contacts/:id',
		(req: Request<Contact, {}, Contact>, res: Response) => {
			contactId = req.params.id;
			const contact = req.body;
			ContactsRepo.updateById(contact, contactId);
			res
				.status(StatusCodes.OK)
				.send();
		});


server
	.delete('/contacts/:id',
		(req: Request<Contact>, res: Response) => {
			contactId = req.params.id;
			ContactsRepo.deleteById(contactId);
			res
				.status(StatusCodes.OK)
				.send();
		});


server.listen(process.env.PORT, () => {
	console.log(`Server running in port ${process.env.PORT} !`);
});