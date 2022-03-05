import { ActionCreator, Action } from 'redux';
import { ActionTypes, ADD_NEW_POST, DELETE_POST, EDIT_POST, LOAD_POSTS, Post, SET_STATUS_ADD_POST } from './types';

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

export const deletePost: ActionCreator<Action> = (id: number): ActionTypes => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};

export const editPost: ActionCreator<Action> = (post: Post): ActionTypes => {
  return {
    type: EDIT_POST,
    payload: post,
  };
};
