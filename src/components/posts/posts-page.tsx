import React, { useEffect } from 'react';
import NavMenu from '../nav-menu/nav-menu';
import MainContainer from '../main-container/main-container';
import PostsList from './posts-list';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types';
import { setCurrentPage, setCurrentPostsList } from '../../store/actions';

const PostsPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <MainContainer>
        <NavMenu/>
        <Header title={`Posts:`}/>
        <PostsList/>
      </MainContainer>
    </React.Fragment>
  );
};

export default PostsPage;
