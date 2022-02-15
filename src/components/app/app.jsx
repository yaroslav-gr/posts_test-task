import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import Article1 from '../main/main';
import Article2 from '../posts/posts';
import { AppRoute } from '../../const/const';
 
const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Article1/>
        </Route>
        <Route exact path={AppRoute.POSTS}>
          <Article2/>
        </Route>
      </Switch>
    </BrowserRouter>
      
  
  );
};

export default App;
