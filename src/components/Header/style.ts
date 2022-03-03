import styled from "styled-components";

interface propsNavigation {
  showNavigation: boolean
}

export const HeaderStyle = styled.header`
  background-color: #87c3f0;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderContainer = styled(FlexContainer)`
  button {
    padding: 16px 8px 16px 0;
  }
  button svg {
    width: 30px;
    height: 30px;
  }
  .logo {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    max-width: calc(100% - 58px);
  }
  .logo p {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    button,
    .logo {
      display: none;
    }
    justify-content: space-between;
  }
`;
export const Navigation = styled.nav<propsNavigation>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: ${props => props.showNavigation ? "block" : "none"};
  width: 100%;
  background-color: rgba(0,0,0,0.3);

  @media (min-width: 1024px) {
    display: block;
    position: static;
    background-color: transparent;
    width: auto;
  }
`;
export const NavigationLinks = styled.ul`
  position: relative;
  padding: 24px 0;
  width: 100%;
  height: 100%;
  max-width: 280px;
  background-color: #9fcef0;

  .closeMenuMobile {
    position: absolute;
    top: calc(50% - 38px / 2);
    left: calc(100% - 38px / 2);
    padding: 4px;
    background-color: #87c3f0;
    border-radius: 8px;
  }
  .closeMenuMobile svg {
    display: block;
    width: 30px;
    height: 30px;
  }
  .logoMobile a {
    padding: 0 0 8px 0;
    margin-bottom: 16px;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid #949393;
    font-weight: 700;
  }
  li:not(.logoMobile, .closeMenuMobile) {
    padding: 16px 16px;
  }
  li:not(.logoMobile):hover {
    background-color: #b5d2e8;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    padding: 0;
    background-color: transparent;

    .closeMenuMobile {
      display: none;
    }

    .logoMobile a {
      margin-bottom: 0;
      padding: 16px 16px;
      border: none;
    }
    
    li:not(.logoMobile, .closeMenuMobile) a {
      padding: 18px 16px;
    }
  }
`;
export const CurrentDate = styled.p`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;