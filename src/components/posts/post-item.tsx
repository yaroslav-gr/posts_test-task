import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, setCurrentPage, setCurrentPostsList, setPagesCount } from '../../store/actions';
import { putPost } from '../../store/api-actions';
import { State } from '../../store/types';
import { PostProps } from './types';

const Post = ({post}: PostProps): JSX.Element => {
  const currentPage = useSelector((state: State) => state.currentPage);
  const countPages = useSelector((state: State) => state.pagesCount);
  const postsForRender = useSelector((state: State) => state.postsForRender);

  const [isEditable, setStatusEditable] = useState(false);
  const [isEdit, setStatusEdit] = useState(true);
  const [title, setTitle] = useState(post.title);
  const [titleDirty, setTitleDirty] = useState(false);
  const [description, setDescription] = useState(post.body);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [titleError, setTitleError] = useState(``);
  const [descriptionError, setDescriptionError] = useState(``);
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setStatusEdit(true);
  });

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
    dispatch(setPagesCount());
    dispatch(setCurrentPostsList());

    if (postsForRender.length === 1 && currentPage === countPages) {
        dispatch(setCurrentPage(currentPage - 1))
        dispatch(setCurrentPostsList());
    };
  };

  const onSaveHandler = () => {
    setStatusEditable(false);
    setStatusEdit(false);
    dispatch(putPost({
      id: post.id,
      userId: post.userId,
      title,
      body: description,
    }));
  };

  const onEditHandler = () => {
    setStatusEditable(true);
  };

  return (
    <React.Fragment>
      <div className={isEditable ? `editable-post min-h-[12.5rem] flex flex-col justify-between card` : `min-h-[12.5rem] flex flex-col justify-between card`}>
      <div className={isEdit ? `invisible` : `lds-dual-ring`}></div>

        {isEditable ? <h1 className='mb-4 text-2xl justify-self-start'>Edit post</h1> : ``}
        {(titleDirty && titleError) && <div className='text-red-400 text-sm'>{titleError}</div>}
        
        {
          isEditable ?
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
          isEditable ?
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
            isEditable ? 
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
