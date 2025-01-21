import { List, ListItem, Typography } from "@mui/material";
import { Post } from "../../models/Post.model";
import PostCard from "./PostCard";

interface PostsListProps {
  posts: Post[];
  firstPostRef: React.RefObject<HTMLLIElement>;
}
function PostsList({ posts, firstPostRef }: PostsListProps) {
  return (
    <List disablePadding sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <ListItem disablePadding key={post.id} ref={index === 0 ? firstPostRef : null}>
            <PostCard post={post} />
          </ListItem>
        ))
      ) : (
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ width: "100%", marginTop: "1rem", fontSize: "1.2rem", color: "text.primary" }}
        >
          No results found.
        </Typography>
      )}
    </List>
  );
}

export default PostsList;
