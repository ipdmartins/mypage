import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Education from './pages/Education';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Work from './pages/Work';

//Switch faz com que uma rota seja acessada por vez. 'exact' serve para buscar a rota completa
//e não abreviar a buscar só com a barra.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main} />
                {/* <Route path='/' exact component={Home} />
                <Route path='/Education' component={Education} />
                <Route path='/Portfolio' component={Portfolio} />
                <Route path='/Skills' component={Skills} />
                <Route path='/Work' component={Work} /> */}
            </Switch>
        </BrowserRouter>
    );
}