import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post-item';
import AddPostForm from './post-add-form';
import Pagination from '../pagination-bar/pagination-bar';
import { State } from '../../store/types';

const PostsList = (): JSX.Element => {
  const currentPosts = useSelector((state: State) => state.postsForRender);
  const currentPage = useSelector((state: State) => state.currentPage);
  
  return (
    <React.Fragment>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {currentPage === 1 ? <AddPostForm/> : ``}
        {currentPosts.map((post) => <Post post={post} key={post.id}/>)}
      </div>
      <Pagination/>
    </React.Fragment>
  );
};

export default PostsList;
