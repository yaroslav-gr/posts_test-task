import React from 'react';
import { PostProps } from './types';

const Post = ({post}: PostProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className='min-h-[12.5rem] flex flex-col justify-between card'>
        <h1 className='mb-4'>{post.title}</h1>
        <div 
          contentEditable 
          className='mb-3 word-break noteditable'
          suppressContentEditableWarning={true}>
          {post.body}
        </div>
        <div className='w-full flex justify-between'>
          <button className='rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'>Del</button>
          <button className='rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'>Edit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;