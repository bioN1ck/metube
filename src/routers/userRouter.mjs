import express from 'express';

import routes from '../routes.mjs';
import {
    changePassword,
    editProfile,
    userDetail,
    users,
} from '../controllers/userController.mjs';


const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;