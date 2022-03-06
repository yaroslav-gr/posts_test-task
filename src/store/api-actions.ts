import { addNewPost, loadPosts, setStatusAddPost, editPost, setPagesCount, setCurrentPostsList } from './actions';
import { APIRoute } from '../const/const';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from './store';
import { AxiosInstance } from 'axios';
import { AddPostFormData } from '../components/posts/types';
import { Post } from './types';

export const fetchPosts = () => (next: ThunkDispatch<undefined, undefined, Action>, _: RootState, api: AxiosInstance): void => {
  api.get(APIRoute.POSTS)
    .then(({data}) => {
      next(loadPosts(data));
      next(setPagesCount());
      next(setCurrentPostsList());
    });
};

export const addPost = (postData: AddPostFormData) => (next: ThunkDispatch<undefined, undefined, Action>, _: RootState, api: AxiosInstance): void => {
  api.post(APIRoute.ADD, postData, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(({data}) => {
      next(setStatusAddPost(true));
      next(addNewPost(data));
    })
    .catch((error) => console.log(error));
};

export const putPost = (postData: Post) => (next: ThunkDispatch<undefined, undefined, Action>, _: RootState, api: AxiosInstance): void => {
  api.put(APIRoute.EDIT + postData.id, postData, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(({data}) => {
      next(editPost(data));      
    })
    .catch((error) => {
      console.log(error);
      next(editPost(postData));
    })
};
