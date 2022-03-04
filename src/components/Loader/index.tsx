import React from "react";

import { Container } from "./style";

import gif from "../../assets/loading.gif";

export default function Loader() {
  return (
    <Container>
      <img src={gif} alt="" />
    </Container>
  )
}