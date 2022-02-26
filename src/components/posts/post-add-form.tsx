import React from 'react';

const AddPostForm = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className='min-h-[12.5rem] flex flex-col justify-center card'>
        <h1 className='mb-4 text-2xl justify-self-start'>Create a new post</h1>
        <form className='flex flex-col'>
          <label className='flex flex-col text-xl mb-3 text-slate-500'> 
            title:
            <input className='outline-none border-b text-black'/>
          </label>
          <label className='flex flex-col text-xl mb-3 text-slate-500'>
            discription:
            <textarea rows={5} className='outline-none border-b text-black'></textarea>
          </label>
          <div className='w-full flex justify-end'>
            <button type='submit' className='rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'>Post</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddPostForm;
