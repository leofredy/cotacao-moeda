import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 59px - 48px);

  h1 {
    margin-bottom: 24px;
  }
  h3 {
    margin-bottom: 16px;
    font-weight: 400;
  }
  .radioButton {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  label {
    cursor: pointer;
    padding: 8px 16px 8px 4px;
  }
  label:not(:last-child) {
    margin-right: 8px;
  }
  button {
    width: 160px;
    height: 40px;
    background-color: #007bff;
    color: #FFF;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  @media (min-width: 1025px) {
    button:hover {
      transition: filter 0.6s ease;
      filter: brightness(0.9);
    }
  }
`;

export const ContainerMoedaOrigem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 180px;
  margin-bottom: 32px;

  input {
    width: 70px;
    border: 1px solid #CCC;
    border-radius: 8px;
  }
`;