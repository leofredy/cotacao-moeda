import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 24px;
  span {
    color: ${() => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`};
  }
`;