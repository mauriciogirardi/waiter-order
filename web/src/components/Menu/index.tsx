import { MenuContainer, MenuLink, Menus } from "./styles";
import { CookingPot, Handbag, Pencil } from "phosphor-react";

export const Menu = () => {
  return (
    <MenuContainer>
      <Menus>
        <MenuLink to="/">
          <CookingPot size={22} weight="duotone" />
          Cozinha
        </MenuLink>
        <MenuLink to="/products">
          <Handbag size={22} weight="duotone" />
          Produtos
        </MenuLink>
        <MenuLink to="/categories">
          <Pencil size={22} weight="duotone" />
          Categorias
        </MenuLink>
      </Menus>
    </MenuContainer>
  );
};
