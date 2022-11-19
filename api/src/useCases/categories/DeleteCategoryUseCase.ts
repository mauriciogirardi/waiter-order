import { Category } from "../../models/Category";

interface Response {
  id: string;
}

export class DeleteCategoryUseCase {
  public async execute({ id }: Response) {
    const categories = await Category.deleteOne({ _id: id });
    return categories;
  }
}
