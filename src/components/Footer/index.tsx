import React from "react";

import { FooterStyle } from "./style";

export default function Footer() {
  return(
    <FooterStyle>
      <div className="row">
        <div className="column">
          <p className="copy">
            Teste projeto utiliza as APIs públicas
            da Awesome para realizar as cotações
          </p>
          <p>
            Acesse: <a target="_blank" href="docs.awesomeapi.com.br">
            docs.awesomeapi.com.br
            </a>
          </p>
        </div>
      </div>
    </FooterStyle>
  );
}