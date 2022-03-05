import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusAddPost } from '../../store/actions';
import { addPost } from '../../store/api-actions';
import { State } from '../../store/types';

const AddPostForm = (): JSX.Element => {
  const titleRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();

  const dispatch = useDispatch();
  const isPostLoaded = useSelector((state: State) => state.isPostAdded);
  const posts = useSelector((state: State) => state.posts);

  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);
  const [titleDirty, setTitleDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [titleError, setTitleError] = useState(`Поле должно быть заполнено`);
  const [descriptionError, setDescriptionError] = useState(`Поле должно быть заполнено`);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (titleError || descriptionError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, descriptionError]);

  useEffect(() => {
    setTitleDirty(false);
    setDescriptionDirty(false);
    setTitleError(`Поле должно быть заполнено`);
    setDescriptionError(`Поле должно быть заполнено`);
    setFormValid(false);
  }, [posts])

  const titleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if(event.target.value.length < 5) {
      setTitleError(`Количество символов должно быть больше 5`);
      if(!event.target.value) {
        setTitleError(`Поле должно быть заполнено`)
      }
    } else {
      setTitleError(``);
    }
  };

  const descriptionHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
    if(event.target.value.length < 10) {
      setDescriptionError(`Количество символов должно быть больше 10`);
      if(!event.target.value) {
        setDescriptionError(`Поле должно быть заполнено`)
      }
    } else {
      setDescriptionError(``);
    }
  };

  const blurHandle = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    switch (event.target.name) {
      case `title`:
        setTitleDirty(true);
        break;
      
      case `description`:
        setDescriptionDirty(true);
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(title !== `` && description !== ``) {
      dispatch(setStatusAddPost(false));
      dispatch(addPost({
        userId: 1,
        title: titleRef.current.value,
        body: descriptionRef.current.value
      }));
      setTitle(``);
      setDescription(``);
    };
  };

  return (
    <React.Fragment>
      <div className='min-h-[12.5rem] flex flex-col justify-center card relative'>
        <div className={isPostLoaded ? `invisible` : `lds-dual-ring loader`}></div>
        <h1 className='mb-4 text-2xl justify-self-start'>Create a new post</h1>
        <form
          className='flex flex-col'
          onSubmit={handleSubmit}>
          <label className='flex flex-col text-xl mb-3 text-slate-500'> 
            title:
            {(titleDirty && titleError) && <div className='text-red-400 text-sm'>{titleError}</div>}
            <input
              className='outline-none border-b text-black'
              required={true}
              ref={titleRef}
              name='title'
              value={title}
              onBlur={event => blurHandle(event)}
              onChange={event => titleHandler(event)}/>
          </label>
          <label className='flex flex-col text-xl mb-3 text-slate-500'>
            discription:
            {(descriptionDirty && descriptionError) && <div className='text-red-400 text-sm'>{descriptionError}</div>}
            <textarea
              rows={5}
              className='outline-none border-b text-black'
              required={true}
              ref={descriptionRef}
              name='description'
              value={description}
              onBlur={event => blurHandle(event)}
              onChange={event => descriptionHandler(event)}>
            </textarea>
          </label>
          <div className='w-full flex justify-end'>
            <button 
              type='submit' 
              className='disabled:opacity-75 disabled:hover:bg-white disabled:hover:text-slate-500 rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'
              onClick={handleSubmit}
              disabled={!formValid}>
              Post
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddPostForm;
