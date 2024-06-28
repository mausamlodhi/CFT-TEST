import { Router } from "express";
import controllers from "../controllers/index";
import middlewares from "../middlewares";
const { categoryController } = controllers
const { authMiddlware } = middlewares
const router = Router();

router.post('/category',
    authMiddlware,
    categoryController.createCategory
);

router.get(
    '/categories',
    authMiddlware,
    categoryController.getAllCategory
);

router.delete(
    '/category/:categoryId',
    authMiddlware,
    categoryController.deleteCategory
);

router.put(
    '/category/:categoryId',
    authMiddlware,
    categoryController.updateCategory
)

export default router;