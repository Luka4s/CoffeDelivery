import {
  BodyContents,
  Glass,
  InfoContent,
  FirstColumnIcons,
  ShoppingCartStyled,
  Packagestyled,
  FastDeliverystyle,
  CoffeStyleIcon,
  Menu,
  InfoHeader,
} from "./styles";

import Image from "../../../../assets/Imagem.svg";
import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  Minus,
  Plus,
} from "phosphor-react";
import { OptionsMenu } from "./styles";
import {
  CoffesStyled,
  ContentCard,
  Characteristics,
  CharacteristicsStyled,
  QuantyControl,
} from "../Coffes/style";
import { CoffesInListProps, useCart } from "../../../../context/CartContext";

export function BodyCoffe() {
  const {
    coffesCount,
    coffesInListBuy,
    listCoffes,
    sumTotalCoffes,
    setListCoffes,
    setCoffesCount,
    setCoffesInListBuy,
    setSumTotalCoffes,
  } = useCart();
  console.log(coffesInListBuy);

  function handleAddCoffeInList(coffe: CoffesInListProps) {
    //Nesse código ele criou uma nova variavel e transformou minha lista em um estado,
    //assim ele percorreu ela utilizando o map e para cada item da lista ele fez uma comparação entre o id do item e o id do coffe
    // e em seguida retornou o item em si com a propriedade quantity + 1 e no final retornou o objeto em si

    const updateQuantityCoffes = listCoffes.map((item) => {
      if (item.id === coffe.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCoffesInListBuy((prevCoffesInListBuy: CoffesInListProps) => {
      const productsInList = coffesInListBuy.some(
        (item) => item.coffeName === coffe.coffeName
      );

      if (productsInList) {
        return coffesInListBuy.map((item) => {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        });
      } else {
        return [prevCoffesInListBuy, { ...coffe, quantity: 1 }];
      }
    });

    //Adicionando valor no TOTAL da conta do cliente
    const newValueSumTotal = sumTotalCoffes + coffe.coffeValue;

    setCoffesCount(coffesCount + 1);
    setListCoffes(updateQuantityCoffes);
    setSumTotalCoffes(newValueSumTotal);
  }

  function handleRemoveCoffeInList(coffe: CoffesInListProps) {
    const removeQuantityCoffes = listCoffes.map((item) => {
      if (item.id === coffe.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    const reducingValueTotal = sumTotalCoffes - coffe.coffeValue;

    const removeCoffeInList = [...coffesInListBuy];
    removeCoffeInList.pop();
    console.log("RemoveCoffeInList: ", removeCoffeInList);
    setSumTotalCoffes(reducingValueTotal);
    setCoffesCount(coffesCount - 1);
    setCoffesInListBuy(removeCoffeInList);
    setListCoffes(removeQuantityCoffes);
  }
  return (
    <div>
      <BodyContents>
        <InfoHeader>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia !</h1>
            <div>
              <p>
                Com o Coffe Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <InfoContent>
              <div>
                <FirstColumnIcons>
                  <ShoppingCartStyled>
                    <ShoppingCart alt="" color={"white"} size={22} />
                  </ShoppingCartStyled>
                  <p>Compra Simples e segura</p>
                </FirstColumnIcons>
                <FirstColumnIcons>
                  <FastDeliverystyle>
                    <Timer alt="" color={"white"} size={22} />
                  </FastDeliverystyle>
                  <p>Entrega rápida e rastreada</p>
                </FirstColumnIcons>
              </div>
              <div>
                <FirstColumnIcons>
                  <Packagestyled>
                    <Package alt="" color={"white"} size={22} />
                  </Packagestyled>
                  <p>Embalagem mantém o café intacto</p>
                </FirstColumnIcons>
                <FirstColumnIcons>
                  <CoffeStyleIcon>
                    <Coffee alt="" color={"white"} size={22} />
                  </CoffeStyleIcon>
                  <p>O café chega fresquinho até você</p>
                </FirstColumnIcons>
              </div>
            </InfoContent>
          </div>
          <div>
            <Glass src={Image} alt="" />
          </div>
        </InfoHeader>
      </BodyContents>
      {/*Conteudo da pagina inteira*/}
      <div>
        <Menu>
          <h1>Menu</h1>
          {/* Cardapio */}
          <OptionsMenu>
            {listCoffes.map((item, index) => {
              return (
                <div key={index}>
                  <CoffesStyled>
                    <ContentCard>
                      <img src={item.coffeImg} alt="" />
                      <Characteristics>
                        <CharacteristicsStyled>
                          <h4>{item.characteristicsPrimary}</h4>
                        </CharacteristicsStyled>
                        <div>
                          {item.characteristicsSecondary === undefined ? (
                            <span></span>
                          ) : (
                            <CharacteristicsStyled>
                              <h4>{item.characteristicsSecondary}</h4>
                            </CharacteristicsStyled>
                          )}
                        </div>
                      </Characteristics>
                      <h2>{item.coffeName}</h2>
                      <p>{item.description}</p>
                    </ContentCard>
                    <QuantyControl>
                      <h6>
                        {item.coffeValue.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h6>
                      <Minus
                        size={22}
                        color={"#8047F8"}
                        onClick={() => {
                          handleRemoveCoffeInList(item);
                        }}
                      />
                      <p>{item.quantity}</p>
                      <Plus
                        size={22}
                        alt=""
                        color={"#8047F8"}
                        onClick={() => {
                          handleAddCoffeInList(item);
                        }}
                      />
                    </QuantyControl>
                  </CoffesStyled>
                </div>
              );
            })}
          </OptionsMenu>
        </Menu>
      </div>
    </div>
  );
}
