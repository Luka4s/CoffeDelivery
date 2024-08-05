import styled from "styled-components";

export const CardCoffeInList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid gray;
`;

export const InfoCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoffeNameCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  padding: 8px;
  text-align: center;
`;

export const ButtonDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const CoffeButtonInList = styled.button`
  width: 30px;
  border: 1px solid ${(props) => props.theme["purple"]};
  border-radius: 8px;

  background-color: ${(props) => props.theme["base-button"]};
`;
