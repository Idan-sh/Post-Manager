import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
  Collapse
} from "@mui/material";
import { createPost } from "../../services/posts.service";
import { useMutation } from "@tanstack/react-query";
import { Post } from "../../models/Post.model";

function NewPostForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  const mutation = useMutation<Post, Error, Omit<Post, "id" | "userId">>({mutationFn: createPost,
      onSuccess: (data) => {
        console.log("Post created successfully:", data);
        handleCloseForm();
      },
      onError: (error: any) => {
        console.error("Error creating post:", error);
      }
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({ title, body });

    setTitle("");
    setBody("");
    handleCloseForm();
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: { xs: "90%", sm: "90%", md: "60%" },
        textAlign: "center",
        marginTop: 4
      }}
    >
      {!isFormOpen ? (
        <Button variant="contained" color="primary" onClick={handleOpenForm}>
          Create New Post
        </Button>
      ) : (
        <Button variant="outlined" color="primary" onClick={handleCloseForm}>
          Close Form
        </Button>
      )}
      <Collapse in={isFormOpen} unmountOnExit>
        <Card sx={{ margin: "0 auto", padding: 2, borderRadius: 2, marginTop: 2 }}>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Create New Post
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Post Title"
                variant="outlined"
                fullWidth
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                slotProps={{
                  inputLabel: {
                    sx: {
                      color: "text.secondary"
                    }
                  }
                }}
                sx={{
                  marginBottom: 2,
                  "& .MuiOutlinedInput-root": {
                    "& input": {
                      color: "text.secondary"
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main"
                    }
                  }
                }}
              />
              <TextField
                label="Post Body"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                slotProps={{
                  inputLabel: {
                    sx: {
                      color: "text.secondary"
                    }
                  }
                }}
                sx={{
                  marginBottom: 2,
                  "& .MuiOutlinedInput-root": {
                    "& textarea": {
                      color: "text.secondary"
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main"
                    }
                  }
                }}
              />
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  padding: 0,
                  marginTop: 2
                }}
              >
                <Button variant="outlined" color="primary" onClick={handleCloseForm}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </Collapse>
    </Box>
  );
}

export default NewPostForm;
