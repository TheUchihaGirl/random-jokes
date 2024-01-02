import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { jokeRoutes } from './routes';

const app = express()
app.use(cors())

app.use('/trpc',trpcExpress.createExpressMiddleware({
    router : jokeRoutes
}));

app.listen(3000);