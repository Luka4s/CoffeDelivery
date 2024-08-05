import styled from "styled-components";

export const CoffesStyledInList = styled.div`
  display: flex;
  flex-direction: row;
  width: 390px;

  align-items: flex-start;
  gap: 20px;
  border: 1px solid green;
`;

export const ContentCardInList = styled.div`
  display: flex;
  border: 1px solid orange;
  height: 100px;
`;

export const QuantyControlInList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 250px;
  border: 1px solid red;
`;

export const CardValueInLis = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ValueCoffeInList = styled.h6`
  font-size: 20px;
`;

export const BodyCoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ButtonCoffeList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100px;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-button"]};
`;

export const RemoveCoffeList = styled.button`
  width: 100px;
`;

export const ButtonsOfCardCoffe = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
