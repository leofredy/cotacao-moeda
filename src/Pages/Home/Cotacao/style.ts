import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  span {
    color: ${() => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`};
  }
`;