import { State, ActionTypes, LOAD_POSTS, ADD_NEW_POST, SET_STATUS_ADD_POST } from './types';

const initialState: State = {
  posts: [],
  isPostAdded: true,
};

const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case ADD_NEW_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };

      case SET_STATUS_ADD_POST:
      return {
        ...state,
        isPostAdded: action.payload
      };

    default: return state;
  };
};

export { reducer };
