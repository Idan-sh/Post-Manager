import axios from 'axios';
import { Post } from '../models/Post.model';

const FETCH_POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const FETCH_POST_BY_ID_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(FETCH_POSTS_API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error while fetching posts:', error.message);
    } else {
      console.error('Unexpected error while fetching posts:', error);
    }
    throw new Error('Failed to fetch posts');
  }
};

export const fetchPostById = async (postId: number): Promise<Post> => {
    try {
        const response =  await axios.get<Post>(FETCH_POST_BY_ID_API_URL + `${postId}`);
        return response.data;
    } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error while fetching post by ID:', error.message);
    } else {
      console.error('Unexpected error while fetching post by ID:', error);
    }
    throw new Error(`Failed to fetch post by ID: ${postId}`);
  }
}

export const createPost = async (post: Omit<Post, 'id' | 'userId'>): Promise<Post> => {
  try {
    const response = await axios.post<Post>(FETCH_POSTS_API_URL, {
        ...post,
        userId: 1 // Default userId
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error while creating post:', error.message);
    } else {
      console.error('Unexpected error while creating post:', error);
    }
    throw new Error('Failed to create post');
  }
};