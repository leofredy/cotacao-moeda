import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background-color: #EEE;
  min-height: calc(100vh - 59px - 48px);
`;

export default function Home() {
  return(
    <Container/>
  );
}