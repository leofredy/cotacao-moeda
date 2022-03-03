import React, { useState, useEffect } from "react";

import { 
  HeaderStyle, 
  HeaderContainer, 
  NavigationLinks, 
  Navigation,
  CurrentDate  
} from "./style";

export default function Header() {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString("pt-BR"));
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu(event: MouseEvent, self: boolean) {
    if (!self || event.target === event.currentTarget) {
      setShowMenu((prevState) => {
        console.log(!prevState);
        document.body.style.overflowY = !prevState ? "hidden" : "auto";
        return !prevState;
      });
    }
  }

  function getCurrentDate() {
    setTimeout(() => {
      setCurrentDate(new Date().toLocaleString("pt-BR"));
    }, 1000);
  }

  useEffect(() => {
    getCurrentDate();
  }, [currentDate]);

  

  return (
    <HeaderStyle>
      <div className="row">
        <div className="column">
          <HeaderContainer>
            <button onClick={(event) => toggleMenu(event as unknown as MouseEvent, false)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#343a40">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
            <div className="logo">
              <p>
                Cotação de moedas
              </p>
            </div>

            <Navigation 
              onClick={(event) => toggleMenu(event as unknown as MouseEvent, true)} 
              showNavigation={showMenu}
            >
              <NavigationLinks>
                <li className="logoMobile">
                  <a href="">
                    Cotação de moedas
                  </a>
                </li>
                <li>
                  <a href="">
                    Home
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://docs.awesomeapi.com.br/api-de-moedas">
                    Documentação
                  </a>
                </li>
                <li onClick={(event) => toggleMenu(event as unknown as MouseEvent, false)} className="closeMenuMobile">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFF">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                  </svg>
                </li>
              </NavigationLinks>
            </Navigation>

            <CurrentDate>
              {currentDate}
            </CurrentDate>
          </HeaderContainer>
        </div>
      </div>
    </HeaderStyle>
  );
}