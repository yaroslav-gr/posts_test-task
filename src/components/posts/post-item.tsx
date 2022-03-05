import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/actions';
import { putPost } from '../../store/api-actions';
import { PostProps } from './types';

const Post = ({post}: PostProps): JSX.Element => {
  const [isEdit, setStatusEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [titleDirty, setTitleDirty] = useState(false);
  const [description, setDescription] = useState(post.body);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [titleError, setTitleError] = useState(``);
  const [descriptionError, setDescriptionError] = useState(``);
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (titleError || descriptionError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, descriptionError]);

  const titleHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
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

  const blurHandle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    switch (event.target.name) {
      case `title`:
        setTitleDirty(true);
        break;
      
      case `description`:
        setDescriptionDirty(true);
        break;
    }
  };

  const deleteButtonHandler = (id: number) => {
    dispatch(deletePost(id));
  };

  const onSaveHandler = () => {
    setStatusEdit(false);
    dispatch(putPost({
      id: post.id,
      userId: post.userId,
      title,
      body: description,
    }));
  };

  const onEditHandler = () => {
    setStatusEdit(true);
  };

  return (
    <React.Fragment>
      <div className={isEdit ? `editable-post min-h-[12.5rem] flex flex-col justify-between card` : `min-h-[12.5rem] flex flex-col justify-between card`}>
      {isEdit ? <h1 className='mb-4 text-2xl justify-self-start'>Edit post</h1> : ``}
      {(titleDirty && titleError) && <div className='text-red-400 text-sm'>{titleError}</div>}
        
        {
          isEdit ?
          <textarea
            rows={2}
            className='outline-none border-b text-black pt-4'
            required={true}
            name='title'
            value={title}
            onBlur={event => blurHandle(event)}
            onChange={event => titleHandler(event)}>
          </textarea> :
          <div
            className='mb-4'>
            {title}
          </div>
        }

        {(descriptionDirty && descriptionError) && <div className='text-red-400 text-sm'>{descriptionError}</div>}

        {
          isEdit ?
          <textarea
            rows={7}
            className='outline-none border-b text-black pt-4'
            required={true}
            name='description'
            value={description}
            onBlur={event => blurHandle(event)}
            onChange={event => descriptionHandler(event)}>
          </textarea> :
          <div 
            className='mb-3 word-break noteditable'>
            {description}
          </div>
        }

        <div className='w-full flex justify-between'>
          <button
            className='rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'
            onClick={() => {
              deleteButtonHandler(post.id);
            }}>
            Del
          </button>

          {
            isEdit ? 
            <button
              className='disabled:opacity-75 disabled:hover:bg-white disabled:hover:text-slate-500 rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'
              disabled={!formValid}
              onClick={onSaveHandler}>
              Save
            </button> :
            <button
              className='rounded-lg p-2 text-slate-500 leading-[2rem] text-2xl hover:bg-slate-100 hover:text-slate-900'
              onClick={onEditHandler}>
              Edit
            </button>
          }
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;
