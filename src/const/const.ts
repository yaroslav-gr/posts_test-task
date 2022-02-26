export enum AppRoute {
  ROOT = `/`,
  POSTS = `/posts`,
};

export enum APIRoute {
  POSTS = `/posts?_limit=8`,
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
