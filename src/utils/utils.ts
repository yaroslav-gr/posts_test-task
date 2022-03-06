import { Post } from "../store/types";

const COUNT_ON_PAGE = 8;

export const calculatePagesCount = (posts: Array<Post>): number => {
  if (posts.length <= 7) {
    return 1;
  }

  const postsWithoutFirstPage = posts.length - 7;
  const integer = Math.trunc(postsWithoutFirstPage / COUNT_ON_PAGE);
  const remainder = (postsWithoutFirstPage / COUNT_ON_PAGE) - integer;

  if (remainder) {
    return (integer + 1 + 1)
  } else {
    return (integer + 1)
  }
};

export const getPostsForRender = (page = 1, posts: Array<Post>): Array<Post> => {
  if (page === 1) {
    return posts.slice(0, 7);
  }

  const start = page * COUNT_ON_PAGE - COUNT_ON_PAGE - 1;
  const end = start + COUNT_ON_PAGE;

  return (posts.slice(start, end))
};
