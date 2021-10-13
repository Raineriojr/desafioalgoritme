import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import List from './pages/lista'
import Cadastro from './pages/cadastro'
import Edit from './pages/editar';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/list" component={List}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/edit" component={Edit}/>
            </Switch>
        </BrowserRouter>
    )
}