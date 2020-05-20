const fileUpload = require('express-fileupload');
import { Router, Response, Application, Request } from 'express';
import {
    uploadImageService,
    deleteImageService
} from "../../services/media/media";
import CONSTS from './consts'

const mediaRouter = Router();

export default (app: Application, client) => {
    app.use(fileUpload());

    mediaRouter.post(CONSTS.UPLOAD_IMAGES, (req: Request, res: Response) => {
        uploadImageService(req, client)
            .then(() => {
                return res
                    .status(200)
                    .send("files saved");
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("files not saved");
            });
    });

    mediaRouter.delete(CONSTS.DELETE_IMAGE, (req: Request, res: Response) => {
        deleteImageService(req.body, client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch((error) => {
                return res
                    .status(500)
                    .send(error.message);
            });
    });

    app.use(CONSTS.BASE_ROUTE, mediaRouter);
};
