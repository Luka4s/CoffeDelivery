import { useCart } from "../../../../context/CartContext";
import {
  CardFinished,
  ContentCardFinished,
  FinishedContent,
  PingIcon,
  UserIcon,
  ConfigIconsCard,
  TimerIcon,
  CashIcon,
  AliginTextCard,
  TitlePage,
  BodyConclusionPage,
} from "./styles";
import { MapPinLine, User, Timer, CurrencyDollar } from "phosphor-react";
import conclusionImage from "../../../../assets/conclusionImage.svg";
/* import { useState } from "react";
import { api } from "../../../../lib/axios"; */

/* interface dataProps {
  id: string;
  order_title: string;
  amount: number;
  quantity: number;
  form_of_payment: string;
}
 */
export function Conclusion() {
  const { userName, streetUser, numberHouse, formPayment } = useCart();
  /*  const [dataCoffe, setDataCoffe] = useState<dataProps[]>([]); */

  /*  const handleListCoffesBdd = async (item) => {
    const requestList = await api.get("/list");

    setDataCoffe(requestList.data);
  };
 */
  return (
    <BodyConclusionPage>
      <FinishedContent>
        <div>
          <TitlePage>Uhu ! Pedido confirmado !!!</TitlePage>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <CardFinished>
          <ConfigIconsCard>
            <ContentCardFinished>
              <UserIcon>
                <User size={22} color={"white"} />
              </UserIcon>
              <p>
                Nome do cliente: <strong>{userName}</strong>
              </p>
            </ContentCardFinished>
            <ContentCardFinished>
              <PingIcon>
                <MapPinLine size={22} />
              </PingIcon>
              <p>
                Entrega em{" "}
                <strong>
                  {streetUser}, {numberHouse}, Camilopolis
                </strong>{" "}
                - Santo André - SP
              </p>
            </ContentCardFinished>
            <div>
              <ContentCardFinished>
                <TimerIcon>
                  <Timer size={22} color={"white"} />
                </TimerIcon>
                <AliginTextCard>
                  <p>Previsão de Entrega</p>
                  <strong>20 min - 30 min</strong>
                </AliginTextCard>
              </ContentCardFinished>
            </div>
            {/*   <div>
              {dataCoffe.map((item) => {
                return (
                  <div>
                    <span>{item.order_title}</span>
                    <span>{item.amount}</span>
                    <span>{item.quantity}</span>
                    <span>{item.form_of_payment}</span>
                  </div>
                );
              })}
            </div> */}

            <ContentCardFinished>
              <CashIcon>
                <CurrencyDollar size={22} />
              </CashIcon>
              <AliginTextCard>
                <p>Pagamento na entrega</p>
                <strong>{formPayment}</strong>
              </AliginTextCard>
            </ContentCardFinished>
          </ConfigIconsCard>
        </CardFinished>
      </FinishedContent>
      <div>
        <img src={conclusionImage} alt="" />
      </div>
    </BodyConclusionPage>
  );
}
