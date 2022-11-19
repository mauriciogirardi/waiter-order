import { Header } from "../../components/Header";
import { CategoryContainer } from "./styles";

const Category = () => {
  return (
    <>
      <Header
        title="Categorias"
        description="Cadastre as categorias de produtos aqui"
      />
      <CategoryContainer>
        <h1>Category</h1>
      </CategoryContainer>
    </>
  );
};

export default Category;
