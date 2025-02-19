import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Pagination,
  Container,
  CircularProgress,
  Button
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/posts.service";
import PostsList from "../components/posts-page/PostsList";
import { Post } from "../models/Post.model";
import NewPostForm from "../components/new-post-form/NewPostForm";

function PostsPage() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const firstPostRef = useRef<HTMLLIElement | null>(null);

  const {
    data: posts,
    isLoading,
    isError,
    error
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5 // Only fetch every 5 minutes, so the newly added post won't be erased because of a refresh.
    // We do this only because we are not saving the post in a persistent dataset.
  });

  const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (_ev: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const filteredResults =
    posts?.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())) || [];

  const paginatedResults = filteredResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFoucsFirstPost = () => {
    firstPostRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    firstPostRef.current?.focus();
  };

  return (
    <Box sx={{ backgroundColor: "background.default", color: "text.primary", minHeight: "100vh" }}>
      <Container sx={{ padding: "2rem 0.6rem" }}>
        <Box sx={{ marginBottom: "3rem", textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight="800"
            letterSpacing="-1px"
            fontSize="2.6rem"
            gutterBottom
          >
            Your Posts Feed
          </Typography>

          <TextField
            variant="outlined"
            placeholder="Search posts..."
            fullWidth
            value={query}
            onChange={handleSearchChange}
            sx={{
              borderRadius: "12px",
              width: { xs: "90%", sm: "90%", md: "60%" },
              margin: "0 auto",
              backgroundColor: "background.paper",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  borderRadius: "12px"
                }
              },
              "& .MuiInputBase-input": {
                color: "text.secondary"
              },
              "& .MuiInputBase-input::placeholder": {
                color: "gray",
                opacity: 1
              }
            }}
          />
          <NewPostForm />
        </Box>

        {isLoading ? (
          <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
            <CircularProgress />
            <Typography variant="h5">Loading posts</Typography>
          </Box>
        ) : isError ? (
          <Typography variant="h5" align="center">
            Error: {error?.message}
          </Typography>
        ) : (
          <>
            <Container
              disableGutters
              sx={{
                width: { xs: "90%", sm: "90%", md: "80%" },
                justifyContent: "center"
              }}
            >
              <PostsList posts={paginatedResults} firstPostRef={firstPostRef} />
            </Container>

            {filteredResults.length > itemsPerPage && (
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <Pagination
                  count={Math.ceil(filteredResults.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            )}

            <Container
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBlock: "1rem"
              }}
            >
              <Button
                onClick={handleFoucsFirstPost}
                variant="contained"
                color="primary"
                size="small"
              >
                Focus on first post
              </Button>
            </Container>
          </>
        )}
      </Container>
    </Box>
  );
}

export default PostsPage;
