import { Header } from "../../components/Header";
import { ProductContainer } from "./styles";

const Product = () => {
  return (
    <>
      <Header title="Produtos" description="Cadastre os seus produtos aqui" />
      <ProductContainer>
        <h1>Product</h1>
      </ProductContainer>
    </>
  );
};

export default Product;
