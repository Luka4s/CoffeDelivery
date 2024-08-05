/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, Minus } from "phosphor-react";

import {
  Characteristics,
  CharacteristicsStyled,
  CoffesStyled,
  ContentCard,
  QuantyControl,
} from "../style";

export interface NewListCoffe {
  id: number;
  coffeImg?: string;
  characteristicsPrimary?: string;
  characteristicsSecondary?: string;
  coffeName: string;
  description: string;
  quantity: number;
  coffeValue: number;
}

export function NewCardCoffes({
  coffeImg,
  characteristicsPrimary,
  characteristicsSecondary,
  coffeName,
  description,
  quantity,
  coffeValue,
}: NewListCoffe) {
  return (
    <CoffesStyled>
      <ContentCard>
        <img src={coffeImg} alt="" />
        <Characteristics>
          <CharacteristicsStyled>
            <h4>{characteristicsPrimary}</h4>
          </CharacteristicsStyled>
          <div>
            {characteristicsSecondary === undefined ? (
              <span></span>
            ) : (
              <CharacteristicsStyled>
                <h4>{characteristicsSecondary}</h4>
              </CharacteristicsStyled>
            )}
          </div>
        </Characteristics>
        <h2>{coffeName}</h2>
        <p>{description}</p>
      </ContentCard>
      <QuantyControl>
        <p>R$</p>
        <h6>{coffeValue}</h6>
        <Minus size={22} color={"#8047F8"} />
        <p>{quantity}</p>
        <Plus size={22} alt="" color={"#8047F8"} />
      </QuantyControl>
    </CoffesStyled>
  );
}
