import styled from "styled-components";

export const BodyShop = styled.div`
  display: grid;
  grid-template-columns: 50vw;
  grid-template-areas: "Left Right";
  column-gap: 32px;
  justify-content: center;
`;

export const BeforeForm = styled.div`
  width: 40rem;
`;

export const FormContainer = styled.form`
  grid-area: Left;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const LabelStyle = styled.label`
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-label"]};
`;

export const ContentUserName = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 560px;
`;

export const InputStyleUser = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: normal;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid var(${(props) => props.theme["base-button"]}, #e6e5e5);
  background: var(${(props) => props.theme["base-input"]}, #ededed);
`;
export const InputStyleCep = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: normal;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid var(${(props) => props.theme["base-button"]}, #e6e5e5);
  background: var(${(props) => props.theme["base-input"]}, #ededed);
`;

export const InputStyleStreet = styled.input`
  display: flex;
  width: 35rem;
  padding: 12px;
  align-items: center;
  gap: 4px;
  align-self: stretch;

  border-radius: 4px;
  border: 1px solid var(${(props) => props.theme["base-button"]}, #e6e5e5);
  background: var(${(props) => props.theme["base-input"]}, #ededed);
`;

export const InputStyleNumber = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid var(${(props) => props.theme["base-button"]}, #e6e5e5);
  background: var(${(props) => props.theme["base-input"]}, #ededed);
`;

export const InputStyleComplement = styled.input`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 4px;
  border: 1px solid var(${(props) => props.theme["base-button"]}, #e6e5e5);
  background: var(${(props) => props.theme["base-input"]}, #ededed);
`;

export const StyledTest = styled.div`
  display: flex;
  flex-direction: row;

  gap: 32px;
`;

export const InputStyleNeighborhood = styled.input`
  display: flex;
  padding: 12px;
  width: 200px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 4px;
  border: 1px solid var(${(props) => props.theme["base-button"]}, #e6e5e5);
  background: var(${(props) => props.theme["base-input"]}, #ededed);
`;

export const InputStyleCity = styled.input`
  display: flex;
  padding: 12px;
  width: 200px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 4px;
  border: 1px solid var(${(props) => props.theme["base-button"]}, #e6e5e5);
  background: var(${(props) => props.theme["base-input"]}, #ededed);
`;

export const InputStyleUF = styled.input`
  display: flex;
  padding: 12px;
  width: 80px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 4px;
  border-style: groove;
  border: 1px solid var(${(props) => props.theme["yellow-light"]});
  border &:hover {
    border-color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const Payment = styled.div`
  display: flex;
  padding: 40px;

  flex-direction: column;
  gap: 32px;
  margin-top: 20px;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const StylePaymentIcon = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ButtonsOfPayment = styled.div`
  display: flex;
  gap: 20px;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const ButtonOfPaymentByCredit = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 16px;
  line-break: loose;
  gap: 8px;
  align-items: center;
  flex: 1 0 0;

  border: none;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};

  &:hover {
    border: 1px solid;
    border-color: ${(props) => props.theme["purple"]};
  }
  &:focus {
    border-color: ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["black"]};
    background-color: ${(props) => props.theme["purple-light"]};
  }
`;

export const ButtonOfPaymentByDebit = styled.button`
  align-items: center;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;

  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};

  &:hover {
    border: 1px solid;
    border-color: ${(props) => props.theme["purple"]};
  }
  &:focus {
    border-color: ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["black"]};
    background-color: ${(props) => props.theme["purple-light"]};
  }
`;

export const ButtonOfPaymentByMoney = styled.button`
  align-items: center;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;

  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};

  &:hover {
    border: 1px solid;
    border-color: ${(props) => props.theme["purple"]};
  }
  &:focus {
    border-color: ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["black"]};
    background-color: ${(props) => props.theme["purple-light"]};
  }
`;

export const CompleteThePurchase = styled.div`
  grid-area: Right;
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  border-radius: 6px 44px;
  background-color: ${(props) => props.theme["base-card"]};
`;
