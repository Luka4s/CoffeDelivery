import {
  CardCoffeInList,
  InfoCardList,
  CoffeNameCard,
  ButtonDisplay,
  CoffeButtonInList,
} from "./styles";

export interface CoffeProps {
  id: number;
  coffeImg?: string;
  coffeName: string;
  quantityCoffes: number;
  valueCoffe: number;
}

export function CardInListBuy({
  coffeImg,
  coffeName,
  quantityCoffes,
  valueCoffe,
}: CoffeProps) {
  return (
    <div>
      <CardCoffeInList>
        <div>
          <img src={coffeImg} alt="" />
        </div>
        <InfoCardList>
          <CoffeNameCard>
            {" "}
            <h2>{coffeName}</h2>
            <h2>Valor:{valueCoffe}</h2>
          </CoffeNameCard>
          <ButtonDisplay>
            <CoffeButtonInList>+</CoffeButtonInList>
            <p>{quantityCoffes > 1 ? quantityCoffes - 1 : quantityCoffes}</p>
            <CoffeButtonInList>-</CoffeButtonInList>
          </ButtonDisplay>
        </InfoCardList>
      </CardCoffeInList>
    </div>
  );
}
