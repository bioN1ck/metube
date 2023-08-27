import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import userRouter from './routers/userRouter.mjs';
import videoRouter from './routers/videoRouter.mjs';
import globalRouter from './routers/globalRouter.mjs';
import routes from './routes.mjs';
import { localsMiddleWare } from './middlewares.mjs';

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(localsMiddleWare)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;