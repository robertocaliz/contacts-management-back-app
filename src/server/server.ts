import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { AppRoutes } from './routes';


const server = express();


server.use(express.json());


server.use(cors({
	origin: process.env.ALLOWED_ORIGIN
}));


server.use(AppRoutes.contactRoutes);
server.use(AppRoutes.userRoutes);


export { server };