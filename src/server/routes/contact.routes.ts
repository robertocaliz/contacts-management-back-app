import { Router } from 'express';
import { ContactsController } from '../controllers';
import { ensureAuthenticated } from '../shared/middleware/auth';


const contactRoutes = Router();

contactRoutes.post('/contacts', ensureAuthenticated, ContactsController.create);
contactRoutes.get('/contacts', ensureAuthenticated, ContactsController.getAll);
contactRoutes.get('/contacts/:id', ensureAuthenticated, ContactsController.getById);
contactRoutes.put('/contacts/:id', ContactsController.updateById);
contactRoutes.delete('/contacts/:id', ensureAuthenticated, ContactsController.deleteById);


export { contactRoutes };