import { Router } from 'express';
import { UsersController } from '../controllers';
import { ensureAuthenticated } from '../shared/middleware/auth';

import {
	returnSignupRecoveryResponse,
	returnSignupResponse,
	sendSignupConfirmationEmail,
	sendSignupRecoveryEmail
} from '../shared/middleware/signup';


import { throwInactiveUserError } from '../shared/middleware/login';


const userRoutes = Router();


userRoutes.post('/signup', UsersController.signup, sendSignupConfirmationEmail, returnSignupResponse);
userRoutes.post('/login', UsersController.login, sendSignupConfirmationEmail, throwInactiveUserError);
userRoutes.get('/users/:id', ensureAuthenticated, UsersController.getById);
userRoutes.put('/users/:id', ensureAuthenticated, UsersController.updateById);
userRoutes.patch('/users/:recoveryToken', UsersController.updatePassword);
userRoutes.post('/checkemail', UsersController.checkIfEmailExists);


userRoutes.post(
	'/recover-sinup',
	UsersController.checkIfEmailExists$,
	sendSignupRecoveryEmail,
	returnSignupRecoveryResponse
);


userRoutes.patch('/signup/activate/:activationToken', UsersController.activate);


export { userRoutes };