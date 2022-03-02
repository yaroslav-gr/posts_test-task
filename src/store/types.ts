export const LOAD_POSTS = `posts/loadPosts`;
export const ADD_NEW_POST = `posts/addNewPost`;
export const SET_STATUS_ADD_POST = `posts/setStatusAddPost`;

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export interface State {
  posts: Post[],
  isPostAdded: boolean | null,
};

export interface ActionLoadPosts {
  type: typeof LOAD_POSTS,
  payload: Post[]
};

export interface ActionAddNewPost {
  type: typeof ADD_NEW_POST,
  payload: Post,
};

export interface ActionSetStatusAddPost {
  type: typeof SET_STATUS_ADD_POST,
  payload: boolean,
};

export type ActionTypes = ActionLoadPosts | ActionAddNewPost | ActionSetStatusAddPost;
