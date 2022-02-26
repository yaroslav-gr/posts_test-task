export const LOAD_POSTS = `posts/loadPosts`;

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export interface State {
  posts: Post[]
};

export interface ActionLoadPosts {
  type: typeof LOAD_POSTS,
  payload: Post[]
};

export type ActionTypes = ActionLoadPosts;
