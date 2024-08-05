import {
  HeaderContainer,
  NavContainer,
  LocationContainer,
  LogoContainer,
  ShopIcon,
  LocationIcon,
} from "./style";
import Logo from "../../assets/Logo.svg";
import { MapPinLine, ShoppingCart } from "phosphor-react";
import { useCart } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { coffesCount } = useCart();

  return (
    <HeaderContainer>
      <NavContainer>
        <NavLink to={"/"} title="Página Inicial">
          <LogoContainer>
            <img src={Logo} alt="Logo do Café Delivery" />
          </LogoContainer>
        </NavLink>
        <LocationContainer>
          <LocationIcon>
            <MapPinLine size={22} alt="ponto de localização" />
            <p>Santo André, SP</p>
          </LocationIcon>
          <NavLink to="/Shop" title="Pagina para Finalizar a compra !">
            <ShopIcon>
              <ShoppingCart
                size={22}
                color={"#C47F17"}
                alt="Carrinho de compra"
              />
              <div>{coffesCount}</div>
            </ShopIcon>
          </NavLink>
        </LocationContainer>
      </NavContainer>
    </HeaderContainer>
  );
}
