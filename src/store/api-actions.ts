import {loadPosts} from './actions';
import {APIRoute} from '../const/const';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from './store';
import { AxiosInstance } from 'axios';

export const fetchPosts = () => (next: ThunkDispatch<undefined, undefined, Action>, _: RootState, api: AxiosInstance): void => {
  api.get(APIRoute.POSTS)
    .then(({data}) => {
      next(loadPosts(data))
    });
};
