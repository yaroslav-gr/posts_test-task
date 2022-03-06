import { calculatePagesCount, getPostsForRender } from '../utils/utils';
import { State, ActionTypes, LOAD_POSTS, ADD_NEW_POST, SET_STATUS_ADD_POST, DELETE_POST, EDIT_POST, SET_PAGES_COUNT, SET_CURRENT_POSTS_LIST, SET_CURRENT_PAGE } from './types';

const initialState: State = {
  posts: [],
  isPostAdded: true,
  pagesCount: 0,
  currentPage: 1,
  postForRender: []
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

      case SET_PAGES_COUNT:
      return {
        ...state,
        pagesCount: calculatePagesCount(state.posts)
      };

      case SET_CURRENT_POSTS_LIST:
      return {
        ...state,
        postForRender: getPostsForRender(state.currentPage, state.posts),
      };

      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default: return state;
  };
};

export { reducer };
