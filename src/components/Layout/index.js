import React from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import { Wrapper, Container, Main } from "./styles";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <SideMenu />
      <Container>

        <Header />

        <Main>{children}</Main>
      </Container>
    </Wrapper>
  );
}
