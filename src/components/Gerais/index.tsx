import React, { useState } from "react";

import { Container } from "./style";

export default function Select() {
  const [ showSelect, setShowSelect ] = useState(false);

  function toggleSelect() {
    setShowSelect((prevState) => !prevState);
  }

  return(
    <Container 
      showSelect={showSelect}
    >
      <div onClick={toggleSelect}>
        <p>
          BRL
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
      {showSelect && (
        <ul>
          <li>
            USD
          </li>
          <li>
            EUR
          </li>
          <li>
            BTC
          </li>
          <li>
            BRL
          </li>
        </ul>
      )}
      
    </Container>
  );
}