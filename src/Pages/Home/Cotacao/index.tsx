import React from "react";

import { Container, Paragraph } from "./style";

interface PropsType {
  codesData: any,
  codein: string,
  quantity: string,
}

export default function Cotacao({ codesData, codein, quantity }: PropsType) {
  return(
    <Container>
      <Paragraph>
        <span>{codein}</span> {quantity}
      </Paragraph>
      {
        Object.keys(codesData).map((key, index) => {
          return (
            <Paragraph
              key={index}
            >
              <span>{codesData[key].codein}</span> {((codesData[key].bid as number) * parseFloat(quantity)).toFixed(2)}
            </Paragraph>
          );
        })
      }
    </Container>
  );
}