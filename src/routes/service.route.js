import { Router } from "express";
import controllers from "../controllers/index";
import middlewares from "../middlewares";
const { serviceController } = controllers
const { authMiddlware } = middlewares;
const router = Router();

router.post(
    '/category/:categoryId/service',
    authMiddlware,
    serviceController.createService
);

router.get(
    '/category/:categoryId/services',
    authMiddlware,
    serviceController.getAllServices
);

router.delete(
    ' /category/:categoryId/service/:serviceId',
    authMiddlware,
    serviceController.deleteService
)

export default router;