import { ActionCreator, Action } from 'redux';
import { ActionTypes, LOAD_POSTS, Post } from './types';

export const loadPosts: ActionCreator<Action> = (posts: Post[]): ActionTypes => {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
};
