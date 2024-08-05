//import { useBuyListContext } from "../../../../context/BuyListContext";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../../context/CartContext";
import { CardInListBuy } from "../components/CardInListBuy";
import {
  CardSumTotal,
  FinishedButton,
  FinishedContentButton,
  ItemOfBuyList,
} from "./style";
import { api } from "../../../../lib/axios";
import { format } from "date-fns";

export function BuyList() {
  const { coffesInListBuy, sumTotalCoffes, coffesCount, stateOfPayment } =
    useCart();
  console.log("Lista de compras", coffesInListBuy);

  const dataAtual = new Date();
  const formattedDate = format(dataAtual, "yyyy-MM-dd");

  const handleAddBdd = async () => {
    try {
      coffesInListBuy.forEach(async (item) => {
        await api.post("/Shop", {
          produto: item.coffeName,
          valor_venda: item.coffeValue,
          dataVenda: formattedDate,
          regiao: stateOfPayment,
        });
        console.log("Dados inseridos com sucesso !", item);
      });
    } catch (err) {
      console.error("Erro ao inserir os dados !", err);
    }
  };

  return (
    <div>
      <ItemOfBuyList>
        {coffesInListBuy.map((itemList, index) => {
          if (itemList.quantity >= 0) {
            return (
              <CardInListBuy
                id={index}
                key={index}
                coffeImg={itemList.coffeImg}
                coffeName={itemList.coffeName}
                quantityCoffes={itemList.quantity + 1}
                valueCoffe={itemList.coffeValue}
              />
            );
          }
        })}
      </ItemOfBuyList>
      <CardSumTotal>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>
          <strong>Total</strong>
        </div>
        <div>
          <p>{coffesCount}</p>
          <p>3,50</p>
          <p>
            {sumTotalCoffes.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </CardSumTotal>
      <FinishedButton>
        <NavLink to={"/Success"}>
          <FinishedContentButton
            onClick={() => {
              handleAddBdd();
            }}
          >
            Finalizar Compra
          </FinishedContentButton>
        </NavLink>
      </FinishedButton>
    </div>
  );
}
{
  /*
  
*/
}
