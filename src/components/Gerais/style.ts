import styled from "styled-components";

interface PropsType {
  showSelect: boolean
}

export const Container = styled.div<PropsType>`
  position: relative;
  cursor: pointer;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    min-width: 80px;
    border: 1px solid #CCC;
    border-radius: 8px;
  }
  div p {
    margin-right: 8px;
    font-size: 16px;
  }
  div svg {
    transform: rotate(${props => props.showSelect ? "180deg" : "0deg"});
    transition: transform 0.6s ease;
  }
  ul {
    position: absolute;
    top: calc(100% + 4px);
    z-index: 1;
    min-width: 100%;
    background-color: #FFF;
    border: 1px solid #CCC;
    border-radius: 8px;
  }
  ul li {
    padding: 8px;
    font-size: 16px;
  }

  @media (min-width: 1025px) {
    ul li:hover {
      background-color: #ededed;
    }
  }
`;