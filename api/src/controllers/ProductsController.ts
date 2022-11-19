import { Request, Response } from "express";
import { ListProductsUseCase } from "../useCases/products/ListProductsUseCase";
import { CreateProductUseCase } from "../useCases/products/CreateProductUseCase";
import { UpdateProductUseCase } from "../useCases/products/UpdateProductUseCase";
import { ListProductsByCategoryUseCase } from "../useCases/products/ListProductsByCategoryUseCase";
import { AppError } from "../error/AppError";

export class ProductsController {
  public async listProducts(
    request: Request,
    response: Response
  ): Promise<Response> {
    const listProductsUseCase = new ListProductsUseCase();
    const products = await listProductsUseCase.execute();

    return response.status(200).json(products);
  }

  public async listProductsByCategory(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { categoryId } = request.params;
    const listProductsByCategoryUseCase = new ListProductsByCategoryUseCase();
    const products = await listProductsByCategoryUseCase.execute({
      categoryId,
    });

    return response.status(200).json(products);
  }

  public async createProduct(
    request: Request,
    response: Response
  ): Promise<Response> {
    const image = request.file?.filename;
    const { name, description, price, category, ingredients } = request.body;

    if (!image) {
      throw new AppError("Image is required!");
    }

    const createProductUseCase = new CreateProductUseCase();
    const product = await createProductUseCase.execute({
      name,
      description,
      price,
      category,
      ingredients,
      image,
    });

    return response.status(200).json(product);
  }

  public async updateProduct(
    request: Request,
    response: Response
  ): Promise<Response> {
    const image = request.file?.filename;
    const { id } = request.params;
    const { name, description, price, category, ingredients, status } =
      request.body;

    if (!image) {
      throw new AppError("Image is required!");
    }

    const updateProductUseCase = new UpdateProductUseCase();
    const product = await updateProductUseCase.execute({
      name,
      description,
      price,
      category,
      ingredients,
      status,
      image,
      id,
    });

    return response.status(200).json(product);
  }
}
