import { useCart } from "../../../../context/CartContext";
import { BuyList } from "../BuyList";
import {
  BeforeForm,
  BodyShop,
  ButtonsOfPayment,
  CompleteThePurchase,
  FormContainer,
  InputStyleCep,
  InputStyleStreet,
  InputStyleNumber,
  LabelStyle,
  Payment,
  InputStyleComplement,
  StyledTest,
  InputStyleNeighborhood,
  InputStyleCity,
  InputStyleUF,
  StylePaymentIcon,
  ButtonOfPaymentByCredit,
  ButtonOfPaymentByDebit,
  ButtonOfPaymentByMoney,
  InputStyleUser,
  ContentUserName,
} from "./style";

import { CreditCard, CurrencyDollar, Bank, Money } from "phosphor-react";

export function FormPage() {
  function Test() {
    console.log("ok");
  }

  const { setUserName, setStreetUser, setNumberHouse, setFormPayment } =
    useCart();

  return (
    <BodyShop>
      <BeforeForm>
        <h1>Complete seu pedido</h1>
        <FormContainer onSubmit={Test}>
          <div>
            <h2>Informe seu endereço de Entrega</h2>
            <div>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <ContentUserName>
            <LabelStyle>
              <InputStyleUser
                type="text"
                name="user_Name"
                placeholder="Cliente"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </LabelStyle>
            <LabelStyle>
              <InputStyleCep type="text" name="user_CEP" placeholder="CEP" />
            </LabelStyle>
          </ContentUserName>
          <LabelStyle>
            <InputStyleStreet
              type="text"
              name="streetName"
              placeholder="Rua"
              onChange={(e) => {
                setStreetUser(e.target.value);
              }}
            />
          </LabelStyle>
          <StyledTest>
            <LabelStyle>
              <InputStyleNumber
                type="text"
                name="numberHouse"
                placeholder="Número"
                onChange={(e) => {
                  setNumberHouse(e.target.value);
                }}
              />
            </LabelStyle>
            <LabelStyle>
              <InputStyleComplement
                type="text"
                name="complementHouse"
                placeholder="Complemento"
              />
            </LabelStyle>
          </StyledTest>
          <StyledTest>
            <LabelStyle>
              <InputStyleNeighborhood
                type="text"
                name="Neighborhood"
                placeholder="Bairro"
              />
            </LabelStyle>
            <LabelStyle>
              <InputStyleCity
                type="text"
                name="cityUser"
                placeholder="Cidade"
              />
            </LabelStyle>
            <LabelStyle>
              <InputStyleUF type="text" name="UF" id="" placeholder="UF" />
            </LabelStyle>
          </StyledTest>
        </FormContainer>
        <Payment>
          <StylePaymentIcon>
            <CurrencyDollar size={22} color={"#8047f8"} />
            <h3>Pagamento</h3>
          </StylePaymentIcon>
          <div>
            <p>
              O Pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <ButtonsOfPayment>
            <ButtonOfPaymentByCredit
              onClick={() => {
                setFormPayment("Crédito");
              }}
            >
              <CreditCard size={22} color={"#8047f8"} /> CARTÃO DE CRÉDITO
            </ButtonOfPaymentByCredit>
            <ButtonOfPaymentByDebit
              onClick={() => {
                setFormPayment("Débito");
              }}
            >
              <Bank size={22} color={"#8047f8"} />
              CARTÃO DE DÉBITO
            </ButtonOfPaymentByDebit>
            <ButtonOfPaymentByMoney
              onClick={() => {
                setFormPayment("Dinheiro");
              }}
            >
              <Money size={22} color={"#8047f8"} />
              DINHEIRO
            </ButtonOfPaymentByMoney>
          </ButtonsOfPayment>
        </Payment>
      </BeforeForm>
      <div>
        <h1>Cafés Selecionados</h1>
        <CompleteThePurchase>
          <BuyList />
        </CompleteThePurchase>
      </div>
    </BodyShop>
  );
}
