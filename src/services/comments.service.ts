// services/commentsService.ts
import axios from 'axios';
import { Comment } from '../models/Comment.model';

const FETCH_COMMENTS_BY_ID_API_URL = 'https://jsonplaceholder.typicode.com/comments';

export const fetchCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await axios.get<Comment[]>(FETCH_COMMENTS_BY_ID_API_URL, {
      params: { postId },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error while fetching comments:', error.message);
    } else {
      console.error('Unexpected error while fetching comments:', error);
    }
    throw new Error('Failed to fetch comments');
  }
};