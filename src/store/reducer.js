import {ActionType} from '../store/actions';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
  };
  return state;
};

export {reducer};
