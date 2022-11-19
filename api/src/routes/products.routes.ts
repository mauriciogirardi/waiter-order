import { Request, Response, Router } from "express";
import { ProductsController } from "../controllers/ProductsController";
import multer from "multer";
import { uploadConfig } from "../config/upload";

const productsController = new ProductsController();
const productsRoutes = Router();

const upload = multer(uploadConfig.upload("uploads"));

productsRoutes.get("/", productsController.listProducts);
productsRoutes.put(
  "/:id",
  upload.single("image"),
  productsController.updateProduct
);

productsRoutes.post(
  "/",
  upload.single("image"),
  productsController.createProduct
);

productsRoutes.get(
  "/categories/:categoryId",
  productsController.listProductsByCategory
);

export { productsRoutes };
