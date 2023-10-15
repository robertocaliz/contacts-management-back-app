import { Router } from 'express';
import { UsersController } from '../controllers';
import { ensureAuthenticated } from '../shared/middleware/auth';


const userRoutes = Router();


userRoutes.post('/signup', UsersController.signup);
userRoutes.post('/login', UsersController.login);
userRoutes.get('/users/:id', ensureAuthenticated, UsersController.getById);


export { userRoutes };