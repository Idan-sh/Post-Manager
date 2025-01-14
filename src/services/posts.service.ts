import axios from 'axios';
import { Post } from '../models/Post.model';

const FETCH_POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(FETCH_POSTS_API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Failed to fetch posts');
  }
};