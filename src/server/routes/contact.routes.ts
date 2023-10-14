import { Router } from 'express';
import { ContactsController } from '../controllers';


const contactRoutes = Router();

contactRoutes.post('/contacts', ContactsController.create);
contactRoutes.get('/contacts', ContactsController.getAll);
contactRoutes.get('/contacts/:id', ContactsController.getById);
contactRoutes.put('/contacts/:id', ContactsController.updateById);
contactRoutes.delete('/contacts/:id', ContactsController.deleteById);


export { contactRoutes };