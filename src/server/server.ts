import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const server = express();

server.use(cors({
	origin: process.env.ALLOWED_ORIGIN
}));
server.use(express.json());


export { server };