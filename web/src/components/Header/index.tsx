import {
  HeaderContainer,
  HeaderContent,
  HeaderBackground,
  HeaderWrapper,
} from "./styles";
import logo from "../../assets/waiter.svg";
import { Menu } from "../Menu";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ description, title }: HeaderProps) => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <div>
          <HeaderContainer>
            <HeaderContent>
              <h1>{title}</h1>
              <span>{description}</span>
            </HeaderContent>
          </HeaderContainer>
          <Menu />
        </div>
        <img src={logo} />
      </HeaderWrapper>
    </HeaderBackground>
  );
};
