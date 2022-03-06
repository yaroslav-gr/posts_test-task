export enum AppRoute {
  ROOT = `/`,
  POSTS = `/posts`,
};

export enum APIRoute {
  POSTS = `/posts`,
  ADD = `/posts`,
  EDIT = `/posts/`
};

export const navList = [
  {
    name: `main page`,
    url: AppRoute.ROOT
  },
  {
    name: `posts`,
    url: AppRoute.POSTS
  }
];
