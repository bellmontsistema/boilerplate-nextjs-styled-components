import React from 'react'
import styled from "styled-components";

const Heading = styled.h1`
  background: ${({ theme }) => theme.colors.secondaryColor};
`;

export default function Home() {
  return <Heading>Oi</Heading>;
}
