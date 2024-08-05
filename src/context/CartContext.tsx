/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from "react";
import { NewListCoffe } from "../components/pages/Home/Coffes/NewCardCoffes";

export type CoffeTypes =
  | "traditional"
  | "express"
  | "cremoso"
  | "arabe"
  | "cafeComLeite"
  | "cafeGelado"
  | "capuccino"
  | "chocolateQuente"
  | "cubano"
  | "havaiano"
  | "irlandes"
  | "latte"
  | "macchiato"
  | "mocaccino";

interface ICartContext {
  coffesCount: number;
  coffesInListBuy: CoffesInListProps[];
  listCoffes: NewListCoffe[];
  sumTotalCoffes: number;
  userName: string;
  streetUser: string;
  numberHouse: number;
  formPayment: string;
  stateOfPayment: string;
  setCoffesCount: (e: any) => void;
  setCoffesInListBuy: (e: any) => void;
  setListCoffes: (e: any) => void;
  setSumTotalCoffes: (e: any) => void;
  setUserName: (e: any) => void;
  setStreetUser: (e: any) => void;
  setNumberHouse: (e: any) => void;
  setFormPayment: (e: any) => void;
  setStateOfPayment: (e: any) => void;
}

export interface CoffesInListProps {
  id: number;
  coffeImg?: string;
  coffeName: string;
  quantity: number;
  coffeValue: number;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = (): ICartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Provider missing!");
  }

  return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
  //Informações do Formulario

  const [userName, setUserName] = useState("");
  const [streetUser, setStreetUser] = useState("");
  const [numberHouse, setNumberHouse] = useState(0);
  const [stateOfPayment, setStateOfPayment] = useState("");

  const [coffesCount, setCoffesCount] = useState(0);
  const [coffesInListBuy, setCoffesInListBuy] = useState<CoffesInListProps[]>(
    []
  );

  const [formPayment, setFormPayment] = useState("");

  const [listCoffes, setListCoffes] = useState([
    {
      id: 1,
      coffeImg: "src/assets/Img-Coffes/Expresso.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: undefined,
      coffeName: "Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      quantity: 0,
      coffeValue: 3.5,
    },
    {
      id: 2,
      coffeImg: "src/assets/Img-Coffes/Americano.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: undefined,
      coffeName: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      quantity: 0,
      coffeValue: 2.0,
    },
    {
      id: 3,
      coffeImg: "src/assets/Img-Coffes/Expresso Cremoso.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: undefined,
      coffeName: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      quantity: 0,
      coffeValue: 4.0,
    },
    {
      id: 4,
      coffeImg: "src/assets/Img-Coffes/Café Gelado.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: "Gelado",
      coffeName: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      quantity: 0,
      coffeValue: 6.0,
    },
    {
      id: 5,
      coffeImg: "src/assets/Img-Coffes/Café com Leite.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: "Com Leite",
      coffeName: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      quantity: 0,
      coffeValue: 4.5,
    },
    {
      id: 6,
      coffeImg: "src/assets/Img-Coffes/Latte.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: "Com Leite",
      coffeName: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      quantity: 0,
      coffeValue: 7.0,
    },
    {
      id: 7,
      coffeImg: "src/assets/Img-Coffes/Capuccino.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: "Com Leite",
      coffeName: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      quantity: 0,
      coffeValue: 8.0,
    },
    {
      id: 8,
      coffeImg: "src/assets/Img-Coffes/Macchiato.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: "Com Leite",
      coffeName: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      quantity: 0,
      coffeValue: 6.5,
    },
    {
      id: 9,
      coffeImg: "src/assets/Img-Coffes/Mochaccino.svg",
      characteristicsPrimary: "Tradicional",
      characteristicsSecondary: "Com Leite",
      coffeName: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      quantity: 0,
      coffeValue: 10.0,
    },
    {
      id: 10,
      coffeImg: "src/assets/Img-Coffes/Chocolate Quente.svg",
      characteristicsPrimary: "Especial",
      characteristicsSecondary: "Com Leite",
      coffeName: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      quantity: 0,
      coffeValue: 4.0,
    },
    {
      id: 11,
      coffeImg: "src/assets/Img-Coffes/Cubano.svg",
      characteristicsPrimary: "Especial",
      characteristicsSecondary: "Alcoólico e Gelado",
      coffeName: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      quantity: 0,
      coffeValue: 15.0,
    },
    {
      id: 12,
      coffeImg: "src/assets/Img-Coffes/Havaiano.svg",
      characteristicsPrimary: "Especial",
      coffeName: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      quantity: 0,
      coffeValue: 9.0,
    },
    {
      id: 13,
      coffeImg: "src/assets/Img-Coffes/Árabe.svg",
      characteristicsPrimary: "Especial",
      coffeName: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      quantity: 0,
      coffeValue: 12.0,
    },
    {
      id: 14,
      coffeImg: "src/assets/Img-Coffes/Irlandês.svg",
      characteristicsPrimary: "Especial",
      characteristicsSecondary: "Alcoólico",
      coffeName: "Irlândes",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      quantity: 0,
      coffeValue: 20.0,
    },
  ]);

  const [sumTotalCoffes, setSumTotalCoffes] = useState(0);

  return (
    <CartContext.Provider
      value={{
        coffesCount,
        coffesInListBuy,
        listCoffes,
        sumTotalCoffes,
        userName,
        streetUser,
        numberHouse,
        formPayment,
        stateOfPayment,
        setListCoffes,
        setCoffesCount,
        setCoffesInListBuy,
        setSumTotalCoffes,
        setUserName,
        setStreetUser,
        setNumberHouse,
        setFormPayment,
        setStateOfPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
