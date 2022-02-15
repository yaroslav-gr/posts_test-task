export const ActionType = {
  LOAD_POSTS: `posts/loadPOsts`,
};

export const ActionCreator = {
  loadPosts: (posts) => ({
    type: ActionType.LOAD_POSTS,
    payload: posts,
  }),
};
