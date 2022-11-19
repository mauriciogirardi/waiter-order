import { AppError } from "../../error/AppError";
import { Product } from "../../models/Product";

interface Ingredients {
  name: string;
  icon: string;
}

interface Response {
  description: string;
  price: number;
  category: string;
  ingredients: string;
  name: string;
  image: string;
}

export class CreateProductUseCase {
  public async execute({
    name,
    category,
    description,
    image,
    ingredients,
    price,
  }: Response) {
    const parseIngredients: Ingredients[] = ingredients
      ? JSON.parse(ingredients)
      : [];

    const alreadyExistsNameRegister = await Product.findOne({ name }).exec();

    if (alreadyExistsNameRegister) {
      throw new AppError("Já existe um produto com este nome!");
    }

    const product = await Product.create({
      name,
      category,
      description,
      price: Number(price),
      ingredients: parseIngredients,
      imagePath: image,
    });

    return product;
  }
}
