import { Request, Response } from "express";
import { ListCategoriesUseCase } from "../useCases/categories/ListCategoryUseCase";
import { CreateCategoryUseCase } from "../useCases/categories/CreateCategoryUseCase";
import { UpdateCategoryUseCase } from "../useCases/categories/UpdateCategoryUseCase";
import { DeleteCategoryUseCase } from "../useCases/categories/DeleteCategoryUseCase";

export class CategoriesController {
  public async listCategories(
    request: Request,
    response: Response
  ): Promise<Response> {
    const listCategoriesUseCase = new ListCategoriesUseCase();
    const categories = await listCategoriesUseCase.execute();

    return response.status(200).json(categories);
  }

  public async createCategories(
    request: Request,
    response: Response
  ): Promise<Response> {
    const createCategoriesUseCase = new CreateCategoryUseCase();
    const { icon, name } = request.body;

    const category = await createCategoriesUseCase.execute({ name, icon });

    return response.status(200).json(category);
  }

  public async updateCategory(
    request: Request,
    response: Response
  ): Promise<Response> {
    const updateCategoryUseCase = new UpdateCategoryUseCase();
    const { icon, name } = request.body;
    const { id } = request.params;

    const category = await updateCategoryUseCase.execute({ name, icon, id });

    return response.status(201).json(category);
  }

  public async deleteCategory(
    request: Request,
    response: Response
  ): Promise<Response> {
    const deleteCategoryUseCase = new DeleteCategoryUseCase();
    const { id } = request.params;

    const category = await deleteCategoryUseCase.execute({ id });

    return response.status(201).json(category);
  }
}
