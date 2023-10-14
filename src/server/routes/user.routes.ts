import { Router } from 'express';
import { UsersController } from '../controllers';


const userRoutes = Router();


userRoutes.post('/signup', UsersController.signup);
userRoutes.post('/login', UsersController.login);
userRoutes.get('/users/:id', UsersController.getById);


export { userRoutes };