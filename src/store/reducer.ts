import { State, ActionTypes, LOAD_POSTS } from './types';



const initialState: State = {
  posts: [],
};

const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
  };
  return state;
};

export {reducer};
