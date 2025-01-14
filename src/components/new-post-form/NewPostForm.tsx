import React, { useState } from "react";
import { Box, Button, Card, CardContent, CardActions, TextField, Typography } from "@mui/material";

function NewPostForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add logic to send data to backend
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
        <Card sx={{ margin: "0 auto", padding: 2, borderRadius: 2 }}>
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
      )}
    </Box>
  );
}

export default NewPostForm;
