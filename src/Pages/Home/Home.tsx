import React from "react";

import Select from "../../components/Gerais";

import { HomeWrapper, ContainerMoedaOrigem } from "./style";

export default function Home() {
  return(
    <main>
      <div className="row">
        <div className="column">
          <HomeWrapper>
            <h1>
              Cotação de moedas
            </h1>
            <h3>
              Selecione a moeda e o valor de origem:
            </h3>
            <ContainerMoedaOrigem>
              <Select/>
              <input type="text" />
            </ContainerMoedaOrigem>
            <h3>
              Selecione as moedas de destino:
            </h3>
            <div className="radioButton">
              <input type="checkbox" name="moeda" id="moedaUSD" />
              <label htmlFor="moedaUSD">
                USD
              </label>
              <input type="checkbox" name="moeda" id="moedaEUR" />
              <label htmlFor="moedaEUR">
                EUR
              </label>
              <input type="checkbox" name="moeda" id="moedaBTC" />
              <label htmlFor="moedaBTC">
                BTC
              </label>
              <input type="checkbox" name="moeda" id="moedaBRL" />
              <label htmlFor="moedaBRL">
                BRL
              </label>
            </div>
            <button>
              Obter cotação
            </button>
          </HomeWrapper>
        </div>
      </div>
    </main>
  );
}