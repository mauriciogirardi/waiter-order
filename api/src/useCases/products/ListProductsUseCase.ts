import { Product } from "../../models/Product";

export class ListProductsUseCase {
  public async execute() {
    const products = await Product.find();
    return products;
  }
}
