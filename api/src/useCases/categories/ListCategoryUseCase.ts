import { Category } from "../../models/Category";

export class ListCategoriesUseCase {
  public async execute() {
    const categories = await Category.find();
    return categories;
  }
}
