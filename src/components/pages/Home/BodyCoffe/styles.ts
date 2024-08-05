import styled from "styled-components";

export const BodyContents = styled.div`
  margin-top: 5.75rem;
`;

export const InfoHeader = styled.div`
  width: 1440px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 160px;
  border-radius: 0px 100px 100px 0px;
  gap: 4rem;
  background-color: ${(props) => props.theme["pink"]};
`;

export const Glass = styled.img`
  border-radius: 0 40px 0 80px;
  border: none;
  background-color: transparent, no-repeat;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 71.5px;
  flex-shrink: 0;
`;

export const ShoppingCartStyled = styled.div`
  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 1000px;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Packagestyled = styled.div`
  background-color: ${(props) => props.theme["base-text"]};
  border-radius: 1000px;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const FastDeliverystyle = styled.div`
  background-color: ${(props) => props.theme["yellow"]};
  border-radius: 1000px;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CoffeStyleIcon = styled.div`
  background-color: ${(props) => props.theme["purple"]};
  border-radius: 1000px;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const FirstColumnIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 8px;
`;

export const Menu = styled.div`
  display: flex;

  flex-direction: column;
  width: 800px;
  padding: 32px 160px;
`;
export const OptionsMenu = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem 20rem;
  grid-template-rows: 20rem 20rem 20rem 20rem;
  width: 1440px;
  justify-content: center;
  padding: 3rem;
  gap: 3rem;
  align-items: center;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 20rem 20rem;
    border: 1px solid red;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
