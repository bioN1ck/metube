import express from 'express';

import routes from '../routes.mjs';
import {
    upload,
    videoDelete,
    videoDetail,
    videoEdit,
} from '../controllers/videoController.mjs';


export const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);

export default videoRouter;