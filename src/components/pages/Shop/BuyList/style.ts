import { styled } from "styled-components";

export const ItemOfBuyList = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  padding: 8px 4px;
  align-items: flex-start;
  overflow: scroll;
  overflow-x: hidden;

  gap: 32px;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const CardSumTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 370px;
  padding: 12px;
  border-top: 2px solid gray;

  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

export const FinishedButton = styled.div`
  display: flex;
  width: 370px;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

export const FinishedContentButton = styled.button`
  width: 370px;
  padding: 8px;
  /* 19.2px */

  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["yellow"]};

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
