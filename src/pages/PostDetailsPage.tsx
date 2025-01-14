import { Typography, CircularProgress, Container, Button, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Post } from "../models/Post.model";
import { fetchPostById } from "../services/posts.service";
import Comments from "../components/comments/Comments";

function PostDetailsPage() {
  const { postId } = useParams();
  const postIdNumber = parseInt(postId || "", 10);

  const location = useLocation();
  const postInput = location.state?.post as Post;

  const navigate = useNavigate();

  const {
    data: post,
    isLoading: postLoading,
    isError: postError,
    error: postErrorObj
  } = useQuery<Post, Error>({
    queryKey: ["post", postIdNumber.toString()],
    queryFn: () => fetchPostById(postIdNumber),
    enabled: !postInput && !isNaN(postIdNumber),
    initialData: postInput
  });

  if (isNaN(postIdNumber)) {
    return <Typography color="error">Invalid Post ID</Typography>;
  }

  if (postError) {
    return <Typography color="error">Error: {postErrorObj.message}</Typography>;
  }

  return (
    <Container
      sx={{
        padding: "3rem 0 7rem",
        width: { xs: "90%", sm: "90%", md: "80%" },
        justifyContent: "center"
      }}
    >
      <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
        Post Details
      </Typography>

      {postLoading && (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} marginBlock={10}>
          <CircularProgress />
          <Typography variant="h6">Post loading</Typography>
        </Box>
      )}
      {!postLoading && (
        <>
          <Typography variant="h5">{post?.title}</Typography>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom marginBottom={2}>
            Post by user with ID: {post?.userId}
          </Typography>
          <Typography variant="body1" gutterBottom marginBottom={6}>
            {post?.body}
          </Typography>

          {/* Comments Section */}
          <Comments />
        </>
      )}

      {/* Go Back to Posts Button */}
      <Box display="flex" width="100%" justifyContent="center" marginTop="2rem">
        <Button onClick={() => navigate("/posts")} variant="contained">
          Go Back
        </Button>
      </Box>
    </Container>
  );
}

export default PostDetailsPage;
