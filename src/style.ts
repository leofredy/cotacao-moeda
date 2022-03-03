import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  .row {
    margin: 0 auto;
    max-width: 1600px;
  }
  .column {
    padding: 0 10px;
  }
  a {
    display: block;
    text-decoration: none;
    color: #343a40;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  li {
    color: #343a40;
    font-size: 14px;
  }
  h1 {
    font-size: 32px;
    color: #343a40;
  }
  h3 {
    font-size: 16px;
    color: #858585;
  }
  p {
    font-size: 12px;
    color: #343a40;
  }
  button {
    background-color: transparent;
    outline: none;
    border: none;
  }
  label {
    font-size: 14px;
    color: #343a40;
  }
  @media (min-width: 1024px) {
    .column {
      padding: 0 15px;
    }
  }
`;