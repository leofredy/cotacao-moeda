import React, { useState, useRef, useEffect, PropsWithChildren } from "react";

import { Transition } from "react-transition-group";
import { defaultFadeTop, transitionFadeTop } from "../../animations";

import { Container } from "./style";

interface Props<Type> {
  value: Type,
  options: Array<Type>,
  onChange: (value: Type) => void
}

const duration = 300;
let exaust: NodeJS.Timeout;

export default function Select<Type>({ value, options, onChange }: PropsWithChildren<Props<Type>>) {
  const [showSelect, setShowSelect] = useState(false);
  const optionsRef = useRef(null);

  function toggleSelect() {
    setShowSelect((prevState) => !prevState);
    document.body.removeEventListener("click", closeSelect);
  }

  function closeSelect() {
    toggleSelect();
  }

  useEffect(() => {
    clearTimeout(exaust);
    if (showSelect) {
      exaust = setTimeout(() => {
        document.body.addEventListener("click", closeSelect);
      }, 50)
    } 
  }, [showSelect]);

  return(
    <Container 
      showSelect={showSelect}
    >
      <div onClick={toggleSelect}>
        <p>
          { value ? value : "Moeda" }
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
      <Transition 
        nodeRef={optionsRef}
        in={showSelect} 
        timeout={duration}
      >
        {state => (
          <ul 
            ref={optionsRef}
            style={{
              ...defaultFadeTop(duration),
              ...transitionFadeTop[state],
            }}
          >
            {
              options.map((option, index) => {
                if (option !== value) {
                  return (
                    <li 
                      onClick={() => {
                        toggleSelect();
                        onChange(option);
                      }}
                      key={index}
                    >
                      {option}
                    </li>
                  );
                }
                return null;
              })
            }
          </ul>
        )}
      </Transition>
      
    </Container>
  );
}