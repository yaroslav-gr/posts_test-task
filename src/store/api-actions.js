import {ActionCreator} from '../store/actions';
import {APIRoute} from '../const/const';

export const fetchPosts = () => (dispatch, _getState, api) => {
  api.get(APIRoute.POSTS).
    then(({data}) => {
      console.log(data);
      dispatch(ActionCreator.loadPosts(data));
    });
};