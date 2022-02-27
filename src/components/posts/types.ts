import { Post } from "../../store/types";

export interface PostProps {
  post: Post
};

export interface PostsListProps {
  posts: Post[]
};

export interface AddPostFormData {
  userId: number,
  title: string,
  body: string,
};
