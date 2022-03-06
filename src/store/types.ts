export const LOAD_POSTS = `posts/loadPosts`;
export const ADD_NEW_POST = `posts/addNewPost`;
export const SET_STATUS_ADD_POST = `posts/setStatusAddPost`;
export const DELETE_POST = `posts/deletePost`;
export const EDIT_POST = `posts/editPost`;
export const SET_PAGES_COUNT = `pages/setPagesCount`;
export const SET_CURRENT_POSTS_LIST = `posts/getCurrentPostsList`;
export const SET_CURRENT_PAGE = `pages/setCurrentPage`;

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export interface State {
  posts: Array<Post>,
  isPostAdded: boolean,
  pagesCount: number,
  currentPage: number,
  postForRender: Array<Post>
};

export interface ActionLoadPosts {
  type: typeof LOAD_POSTS,
  payload: Post[],
};

export interface ActionAddNewPost {
  type: typeof ADD_NEW_POST,
  payload: Post,
};

export interface ActionSetStatusAddPost {
  type: typeof SET_STATUS_ADD_POST,
  payload: boolean,
};

export interface ActionDeletePost {
  type: typeof DELETE_POST,
  payload: number,
};

export interface ActionEditPost {
  type: typeof EDIT_POST,
  payload: Post,
};

export interface ActionSetPagesCount {
  type: typeof SET_PAGES_COUNT,
};

export interface ActionSetCurrentPostsList {
  type: typeof SET_CURRENT_POSTS_LIST,
};

export interface ActionSetCurrentPage {
  type: typeof SET_CURRENT_PAGE,
  payload: number,
};

export type ActionTypes = ActionLoadPosts |
                          ActionAddNewPost |
                          ActionSetStatusAddPost |
                          ActionDeletePost |
                          ActionEditPost |
                          ActionSetPagesCount |
                          ActionSetCurrentPostsList |
                          ActionSetCurrentPage;

