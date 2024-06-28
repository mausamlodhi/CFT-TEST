import { Router } from "express";
import controllers from "../controllers";
const { userController } = controllers
const router = Router();

router.post(
    '/login',
    userController.userLogin
);
router.post(
    '/signup',
    userController.userSignup
);
export default router;