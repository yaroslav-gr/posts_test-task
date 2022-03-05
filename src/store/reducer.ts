import { State, ActionTypes, LOAD_POSTS, ADD_NEW_POST, SET_STATUS_ADD_POST, DELETE_POST, EDIT_POST } from './types';

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

      case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload)
      };

      case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if(post.id === action.payload.id) {
            return {
              userId: post.userId,
              id: post.id,
              title: action.payload.title,
              body: action.payload.body,
            }
          } else {
            return post;
          };
        })
      };

    default: return state;
  };
};

export { reducer };
