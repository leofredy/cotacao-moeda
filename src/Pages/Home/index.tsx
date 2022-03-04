import React, { useState, useEffect, useRef, useContext } from "react";
import { Transition } from "react-transition-group";
import FetchService from "../../services";

import { LoaderContext } from "../../Contexts/loaderContext";

import Select from "../../components/Gerais";
import Cotacao from "./Cotacao";

import { defaultFade, transitionFade } from "../../animations";
import { HomeWrapper, ContainerMoedaOrigem } from "./style";


const currencys = ["USD", "EUR", "NOK", "BRL"];
let exausted: NodeJS.Timeout;

export default function Home() {
  const { changeLoading } = useContext(LoaderContext);
  const [codein, setCodein]                 = useState("");
  const [codesout, setCodesout]             = useState<string[]>([]);
  const [quantity, setQuantity]             = useState("");
  const [showCodeout, setShowCodeout]       = useState(false);
  const [showBtnCotacao, setShowBtnCotacao] = useState(false);
  const [codesData, setCodesData]           = useState<Object>({});
  const [showResult, setShowResult]         = useState(false);

  const codeoutRef = useRef(null);
  const btnCotacaoRef = useRef(null);

  useEffect(() => {
    clearTimeout(exausted);
    let showCodeout = false;
    if (codein && quantity) {
      showCodeout= true;
    } 
    exausted = setTimeout(() => {
      setShowCodeout(showCodeout);
    }, 500);
  }, [codein, quantity]);

  useEffect(() => {
    if (codesout.length && quantity) {
      setShowBtnCotacao(true);
    } else {
      setShowBtnCotacao(false);
    }
  }, [codesout, quantity]);

  useEffect(() => {
    setCodesout([]);
  }, [codein]);

  useEffect(() => {
    if (Object.keys(codesData).length) {
      setShowResult(true);
    }
  }, [codesData]);

  function changeSelect(value: string) {
    setCodein(value);
  }

  function changeQuantity(event: React.FormEvent<HTMLInputElement>) {
    setQuantity(event.currentTarget.value);
  }

  function handleCodesout(event: React.ChangeEvent<HTMLInputElement>, currency: string) {
    if (event.target.checked) {
      setCodesout((prevState) => [
        ...prevState,
        currency
      ]);
    } else {
      setCodesout((prevState) => {
        return prevState.filter(state => state !== currency)
      });
    }
  }

  function fetchCotacao() {
    const api = new FetchService(codesout, codein);
    changeLoading(true);
    api.request()
      .then(response => response.json())
      .then(data => {
        setCodesData(data);
        changeLoading(false)
      });
  }

  return(
    <main>
      <div className="row">
        <div className="column">
          <HomeWrapper>
            <h1>
              Cotação de moedas
            </h1>
            {
              !showResult ? (
                <>
                  <h3>
                    Selecione a moeda e o valor de origem:
                  </h3>
                  <ContainerMoedaOrigem>
                    <Select 
                      value={codein} 
                      options={currencys}
                      onChange={changeSelect}
                    />
                    <input onChange={changeQuantity} value={quantity} type="text" />
                  </ContainerMoedaOrigem>
                  <Transition 
                    nodeRef={codeoutRef}
                    in={showCodeout} 
                    timeout={300}
                  >
                    {state => (
                      <div
                        ref={codeoutRef}
                        style={{
                          ...defaultFade(300),
                          ...transitionFade[state],
                        }}
                      >
                        <h3>
                          Selecione as moedas de destino:
                        </h3>
                        <div className="radioButton">
                          {
                            currencys.map((currency, index) => {
                              return currency !== codein && (
                                <React.Fragment key={index}>
                                  <input 
                                    onChange={(event) => handleCodesout(event, currency)}
                                    checked={codesout.includes(currency)}
                                    type="checkbox" 
                                    name="moeda" 
                                    id={`moeda${currency}`}
                                  />
                                  <label htmlFor={`moeda${currency}`}>
                                    {currency}
                                  </label>
                                </React.Fragment>
                              );
                            })
                          }
                        </div>
                      </div>
                    )}
                  </Transition>

                  <Transition 
                    nodeRef={btnCotacaoRef}
                    in={showBtnCotacao} 
                    timeout={300}
                  >
                    {state => (
                      <button
                        onClick={fetchCotacao}
                        ref={codeoutRef}
                        style={{
                          ...defaultFade(300),
                          ...transitionFade[state],
                        }}
                      >
                        Obter cotação
                      </button>
                    )}
                  </Transition>
                </>
              ) : (
                <Cotacao 
                  codesData={codesData}
                  codein={codein}
                  quantity={quantity}
                />
              )
            }
            
          </HomeWrapper>
        </div>
      </div>
    </main>
  );
}