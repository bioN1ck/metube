import express from 'express';

import routes from '../routes.mjs';


const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send('user index'));
userRouter.get('/edit', (req, res) => res.send('user edit'));
userRouter.get('/profile', (req, res) => res.send('user index'));

export default userRouter;