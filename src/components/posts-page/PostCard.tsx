import { Card, CardContent, Tooltip, Typography } from "@mui/material";
import { Post } from "../../models/Post.model";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();

  return (
    <Tooltip title="See full details" placement="bottom" arrow>
      <Card
        onClick={() => navigate(`/post/${post.id}`, { state: { post } })}
        sx={{
          width: "100%",
          boxShadow: 3,
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "background.paper",
          cursor: "pointer"
        }}
      >
        <CardContent>
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            User: {post.userId}
          </Typography>
          <Typography variant="h5" color="text.secondary" fontWeight="bold" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Tooltip>
  );
}

export default PostCard;
