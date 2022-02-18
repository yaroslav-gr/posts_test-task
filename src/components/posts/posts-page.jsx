import React from 'react';
import NavMenu from '../nav-menu/nav-menu';
import MainContainer from '../main-container/main-container';
import PostsList from './posts-list';
import Header from '../header/header';

const PostsPage = () => {
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
