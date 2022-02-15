import {ActionCreator} from '../store/actions';
import {APIRoute} from '../const/const';

export const fetchStreets = () => (dispatch, _getState, api) => {
  api.get(APIRoute.ROOT).
    then(({data}) => {
      dispatch(ActionCreator.action(data));
    });
};