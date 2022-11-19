import { Category } from "../../models/Category";

interface Response {
  icon?: string;
  name: string;
}

export class CreateCategoryUseCase {
  public async execute({ name, icon }: Response) {
    const category = await Category.create({ icon, name });

    return category;
  }
}
