import { Product } from "../../models/Product";

interface Response {
  categoryId: string;
}

export class ListProductsByCategoryUseCase {
  public async execute({ categoryId }: Response) {
    const products = await Product.find().where("category").equals(categoryId);
    return products;
  }
}
