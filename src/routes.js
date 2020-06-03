import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Timeline from "./pages/Timeline";
import Skills from "./pages/Skills";
import Email from "./pages/Email";

/**
 * Switch faz com que uma rota seja acessada por vez;
 * 'exact' serve para buscar a rota completa e não abreviar a buscar só com a barra.
 */
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Timeline" component={Timeline} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Email" component={Email} />

        {/* <Route path='/' exact component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
}
