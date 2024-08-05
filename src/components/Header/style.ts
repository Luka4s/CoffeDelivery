import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 99vw;
  padding: 36px 160px;
  background-color: ${(props) => props.theme["background"]};
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LocationIcon = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px;
  font-size: 14px;
  font-family: "Roboto";
  line-height: "130%";
  font-weight: 600;
  border-radius: 10px;
  align-items: center;
  color: var(--Brand-Purple-Dark, #4b2995);
  background-color: ${(props) => props.theme["purple-light"]};
`;

export const ShopIcon = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  margin-left: 1rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  :active {
    color: ${(props) => props.theme["yellow-light"]};
    background-color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const testLink = styled.div`
  ${(props) => props.theme["background"]}
`;

export const Shop = styled.img`
  height: 22px;
  width: 22px;
`;

export const Pin = styled.img`
  height: 22px;
  width: 22px;
`;
