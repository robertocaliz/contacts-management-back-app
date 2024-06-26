import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { errorLogger, returnError } from './shared/middleware/error-handling';
import './database/mongodb';
import { AppRoutes } from './routes';

const server = express();
server.use(express.json());

server.use(
    cors({
        origin: process.env.ALLOWED_ORIGIN,
    }),
);

server.use(AppRoutes.contactRoutes);
server.use(AppRoutes.userRoutes);
server.use(AppRoutes.refreshTokenRoutes);

server.use(errorLogger);
server.use(returnError);

export { server };
