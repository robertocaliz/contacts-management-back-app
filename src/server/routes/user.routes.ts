import { Router } from 'express';
import { UsersController } from '../controllers';
import { ensureAuthenticated } from '../shared/middleware/auth';
import { returnResponse, sendSignupConfirmationEmail } from '../shared/middleware/signup';
import { throwInactiveUserError } from '../shared/middleware/login';


const userRoutes = Router();


userRoutes.post('/signup', UsersController.signup, sendSignupConfirmationEmail, returnResponse);
userRoutes.post('/login', UsersController.login, sendSignupConfirmationEmail, throwInactiveUserError);
userRoutes.get('/users/:id', ensureAuthenticated, UsersController.getById);
userRoutes.put('/users/:id', ensureAuthenticated, UsersController.updateById);
userRoutes.post('/checkemail', UsersController.checkIfEmailExists);
userRoutes.patch('signup/activate/:activationToken', UsersController.activate);


export { userRoutes };