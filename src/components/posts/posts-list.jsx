import React from 'react';
import { connect } from 'react-redux';
import Post from './post-item';
import AddPostForm from './post-add-form';

const PostsList = ({posts}) => {
  return (
    <React.Fragment>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <AddPostForm/>
        {posts.map(post => <Post post={post} key={post.id}/>)}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
})

export default connect(mapStateToProps, null)(PostsList);
