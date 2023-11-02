import { Router } from 'express';
import { UsersController } from '../controllers';
import { ensureAuthenticated } from '../shared/middleware/auth';
import { sendSignupConfirmationEmail } from '../shared/middleware/signup';


const userRoutes = Router();


userRoutes.post('/signup', UsersController.signup, sendSignupConfirmationEmail);
userRoutes.post('/login', UsersController.login, sendSignupConfirmationEmail);
userRoutes.get('/users/:id', ensureAuthenticated, UsersController.getById);
userRoutes.put('/users/:id', ensureAuthenticated, UsersController.updateById);
userRoutes.post('/checkemail', UsersController.checkIfEmailExists);


export { userRoutes };