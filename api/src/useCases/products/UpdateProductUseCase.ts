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
  status?: "ACTIVE" | "DISABLED";
  id: string;
}

export class UpdateProductUseCase {
  public async execute({
    name,
    category,
    description,
    image,
    ingredients,
    price,
    status,
    id,
  }: Response) {
    const parseIngredients: Ingredients[] = ingredients
      ? JSON.parse(ingredients)
      : [];

    const categories = await Product.updateOne(
      { _id: id },
      {
        $set: {
          name,
          category,
          status,
          description,
          imagePath: image,
          ingredients: parseIngredients,
          price: Number(price),
        },
      }
    );
    return categories;
  }
}
