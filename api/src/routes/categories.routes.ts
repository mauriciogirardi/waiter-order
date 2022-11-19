import { Request, Response, Router } from "express";

import { CategoriesController } from "../controllers/CategoriesController";

const categoriesController = new CategoriesController();

const categoriesRoutes = Router();

categoriesRoutes.get("/", categoriesController.listCategories);
categoriesRoutes.post("/", categoriesController.createCategories);
categoriesRoutes.put("/:id", categoriesController.updateCategory);
categoriesRoutes.delete("/:id", categoriesController.deleteCategory);

export { categoriesRoutes };
