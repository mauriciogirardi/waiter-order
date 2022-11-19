import { Category } from "../../models/Category";

interface Response {
  icon?: string;
  name: string;
  id: string;
}

export class UpdateCategoryUseCase {
  public async execute({ name, icon, id }: Response) {
    const categories = await Category.updateOne(
      { _id: id },
      { $set: { name, icon } }
    );
    return categories;
  }
}
