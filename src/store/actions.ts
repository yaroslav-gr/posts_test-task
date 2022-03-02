import { ActionCreator, Action } from 'redux';
import { ActionTypes, ADD_NEW_POST, LOAD_POSTS, Post, SET_STATUS_ADD_POST } from './types';

export const loadPosts: ActionCreator<Action> = (posts: Post[]): ActionTypes => {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
};

export const addNewPost: ActionCreator<Action> = (newPost: Post): ActionTypes => {
  return {
    type: ADD_NEW_POST,
    payload: newPost,
  };
};

export const setStatusAddPost: ActionCreator<Action> = (status: boolean): ActionTypes => {
  return {
    type: SET_STATUS_ADD_POST,
    payload: status,
  };
};
