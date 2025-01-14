import {
  Box,
  Card,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCommentsByPostId } from "../../services/comments.service";
import { Comment } from "../../models/Comment.model";

function Comments() {
  const { postId } = useParams();
  const postIdNumber = parseInt(postId || "", 10);

  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
    error: commentsErrorObj
  } = useQuery<Comment[], Error>({
    queryKey: ["comments", postIdNumber.toString()],
    queryFn: () => fetchCommentsByPostId(postIdNumber),
    enabled: !isNaN(postIdNumber)
  });

  if (isNaN(postIdNumber)) {
    return <Typography color="error">Invalid Post ID</Typography>;
  }

  return (
    <Card sx={{ padding: "1.5rem 2rem" }}>
      <Typography variant="h4" color="text.secondary">
        Comments
      </Typography>

      {commentsLoading ? (
        <Box display="flex" justifyContent="center" margin="5rem">
          <CircularProgress />
        </Box>
      ) : commentsError ? (
        <Typography color="error">{commentsErrorObj.message}</Typography>
      ) : (
        <List>
          {comments?.map((comment: Comment) => (
            <ListItem key={comment.id}>
              <ListItemText
                primary={
                  <Typography variant="h6" fontWeight={400} color="text.secondary">
                    {comment.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        backgroundColor: "primary.main",
                        padding: "0.1rem 0.6rem",
                        borderRadius: "6px"
                      }}
                    >
                      {comment.email}
                    </Typography>
                    {" — "}
                    {comment.body}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Card>
  );
}

export default Comments;
