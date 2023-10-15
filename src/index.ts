
import { server } from './server/server';


server.listen(process.env.PORT, () => {
	console.log(`Running ContactsPro-Back on port ${process.env.PORT} !`);
});