import { State, ActionTypes, LOAD_POSTS, ADD_NEW_POST } from './types';

const initialState: State = {
  posts: [],
  newPostId: null,
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
      }  
    default: return state;
  };
};

export { reducer };
