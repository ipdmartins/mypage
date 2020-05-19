import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Work from "./pages/Work";
import Education from "./pages/Education";
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
        <Route path="/" exact component={Main} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Work" component={Work} />
        <Route path="/Education" component={Education} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Email" component={Email} />

        {/* <Route path='/' exact component={Home} /> */}
      </Switch>
    </BrowserRouter>
  );
}
