import styled from "styled-components";

export const CoffesStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  width: 256px;
  height: 310px;
  padding: 1rem;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const Characteristics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 10px;
`;

export const CharacteristicsStyled = styled.div`
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;
  background-color: ${(props) => props.theme["yellow-light"]};
`;

export const ContentCard = styled.div`
  position: relative;
  bottom: 60px;
`;

export const QuantyControl = styled.div`
  display: flex;
  height: 38px;
  padding: 8px;
  align-items: center;

  gap: 9px;
  border-radius: 8px;
  font-family: Baloo 2, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;

  background-color: ${(props) => props.theme["base-button"]};
`;
