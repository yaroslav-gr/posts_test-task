import React from 'react';
import { connect } from 'react-redux';
import Post from './post-item';

const PostsList = ({posts}) => {
  return (
    <React.Fragment>
      <div className='md:mx-auto flex flex-wrap justify-between'>
        {posts.map(post => <Post post={post} key={post.id}/>)}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
})

export default connect(mapStateToProps, null)(PostsList);
