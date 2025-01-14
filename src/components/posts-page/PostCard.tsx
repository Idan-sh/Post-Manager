import { Card, CardContent, Typography } from "@mui/material";
import { Post } from "../../models/Post.model";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: 3,
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "background.paper"
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
  );
}

export default PostCard;
