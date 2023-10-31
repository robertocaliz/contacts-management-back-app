import { Router } from 'express';
import { UsersController } from '../controllers';
import { ensureAuthenticated } from '../shared/middleware/auth';
import { sendConfirmationEmail } from '../shared/middleware/email-sending/signup';


const userRoutes = Router();


userRoutes.post('/signup', UsersController.signup, sendConfirmationEmail);
userRoutes.post('/login', UsersController.login);
userRoutes.get('/users/:id', ensureAuthenticated, UsersController.getById);
userRoutes.put('/users/:id', ensureAuthenticated, UsersController.updateById);
userRoutes.post('/checkemail', UsersController.checkIfEmailExists);


export { userRoutes };