import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import MainPage from '../main/main';
import PostsPage from '../posts/posts-page';
import { AppRoute } from '../../const/const';
 
const App = (): JSX.Element => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.POSTS}>
          <PostsPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
