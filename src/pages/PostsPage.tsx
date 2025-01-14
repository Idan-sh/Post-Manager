import { useState } from "react";
import { Box, TextField, Typography, Pagination, Container } from "@mui/material";
import PostsList from "../components/posts-page/PostsList";

// Mock data for movies/TV shows (replace this with an API later)
const mockData = Array.from({ length: 50 }, (_, i) => ({
  userId: i,
  id: i + 1,
  title: `Post ${i + 1}`,
  body: `This is the body for post ${i + 1}.`
}));

function PostsPage() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination variables
  const itemsPerPage = 10; // Items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtered and paginated results
  const filteredResults = mockData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const paginatedResults = filteredResults.slice(startIndex, endIndex);

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{ backgroundColor: "background.default", color: "text.primary", minHeight: "100vh" }}>
      <Container sx={{ padding: "2rem 0.6rem" }}>
        {/* Search Bar */}
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
              width: { xs: "90%", sm: "90%", md: "60%" },
              color: "text.primary",
              borderRadius: "6px",
              margin: "0 auto",
              backgroundColor: "background.paper",
              "& .MuiInputBase-input": {
                color: "text.secondary"
              },
              "& .MuiInputBase-input::placeholder": {
                color: "gray",
                opacity: 1
              }
            }}
          />
        </Box>

        {/* Results List */}
        <Container
          disableGutters
          sx={{
            width: { xs: "90%", sm: "90%", md: "80%" },
            justifyContent: "center"
          }}
        >
          <PostsList posts={paginatedResults} />
        </Container>

        {/* Pagination */}
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
      </Container>
    </Box>
  );
}

export default PostsPage;
