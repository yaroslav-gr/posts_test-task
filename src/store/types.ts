export const LOAD_POSTS = `posts/loadPosts`;
export const ADD_NEW_POST = `posts/addNewPost`;

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export interface State {
  posts: Post[],
  newPostId: number | null,
};

export interface ActionLoadPosts {
  type: typeof LOAD_POSTS,
  payload: Post[]
};

export interface ActionAddNewPost {
  type: typeof ADD_NEW_POST,
  payload: Post,
};

export type ActionTypes = ActionLoadPosts | ActionAddNewPost;
