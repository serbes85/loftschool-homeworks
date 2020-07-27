// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';

import './AppRouter.css';

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/shows/:id" component={ShowPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
