import {Router, Request, Response, Application} from 'express';

import {
    addStaffService,
    getAllStuffService,
    updateStuffService,
    deleteStaffService
} from '../../services/staff/staff';
import CONST from "./const"
import {StaffResponseType} from '../../types/staff';

const serviceRouter = Router();

export default (app: Application, client) => {
    serviceRouter.post(CONST.ADD_STAFF, (req: Request, res: Response) => {
        addStaffService(req.body, client)
            .then((status: StaffResponseType) => {
                return res
                    .status(200)
                    .send(status.ops);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("staff was not added");
            });
    });

    serviceRouter.get(CONST.GET_ALL_STAFF, (req: Request, res: Response) => {
        getAllStuffService(client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("error occur");
            });
    });

    serviceRouter.put(CONST.UPDATE_STAFF, (req: Request, res: Response) => {
        updateStuffService(req.body, client)
            .then(status => {
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

    serviceRouter.delete(CONST.DELETE_STAFF, (req: Request, res: Response) => {
        deleteStaffService(req.body, client)
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

    app.use(CONST.BASE_ROUTE, serviceRouter);
};
