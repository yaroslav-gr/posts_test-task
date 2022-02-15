import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import Article1 from '../article1/article1';
import Article2 from '../article2/article2';
import { AppRoute } from '../../const/const';
 
const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <h1>Hello</h1>
      <Switch>
        <Route exact path={AppRoute.ARTICLE1}>
          <Article1/>
        </Route>
        <Route exact path={AppRoute.ARTICLE2}>
          <Article2/>
        </Route>
      </Switch>
    </BrowserRouter>
      
  
  );
};

export default App;
