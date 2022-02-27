import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/api-actions';

const AddPostForm = (): JSX.Element => {
  const titleRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(titleRef.current.value, descriptionRef.current.value);
    dispatch(addPost({
        userId: 1,
        title: titleRef.current.value,
        body: descriptionRef.current.value
      })); 
  };

  return (
    <React.Fragment>
      <div className='min-h-[12.5rem] flex flex-col justify-center card'>
        <h1 className='mb-4 text-2xl justify-self-start'>Create a new post</h1>
        <form
          className='flex flex-col'
          onSubmit={handleSubmit}>
          <label className='flex flex-col text-xl mb-3 text-slate-500'> 
            title:
            <input
              className='outline-none border-b text-black'
              required
              ref={titleRef}/>
          </label>
          <label className='flex flex-col text-xl mb-3 text-slate-500'>
            discription:
            <textarea
              rows={5}
              className='outline-none border-b text-black'
              required
              ref={descriptionRef}>
            </textarea>
          </label>
          <div className='w-full flex justify-end'>
            <button 
              type='submit' 
              className='rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'
              onClick={handleSubmit}>
              Post
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddPostForm;
