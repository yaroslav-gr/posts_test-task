import { ActionCreator, Action } from 'redux';
import { ActionTypes, ADD_NEW_POST, LOAD_POSTS, Post } from './types';

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
