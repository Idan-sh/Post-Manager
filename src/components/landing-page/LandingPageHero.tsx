import { Typography, Button, Container, Box } from "@mui/material";
import { motion } from "motion/react";

function LandingPageHero() {
  const delayInterval = 0.4;
  const distance = 100;

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        textAlign: "center",
        height: "calc(100vh - 3.9rem)",
        paddingTop: "2rem"
      }}
    >
      <Box width="60%" flexDirection="column">
        <motion.div
          initial={{ opacity: 0, x: distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 0 }}
        >
          <Typography variant="h2" fontWeight={800} textAlign="end" gutterBottom>
            WELCOME
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 1 }}
        >
          <Typography variant="h2" fontWeight={800} textAlign="start" gutterBottom>
            TO YOUR
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 2 }}
        >
          <Typography variant="h2" fontWeight={800} textAlign="center" gutterBottom>
            POSTS
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delayInterval * 3 }}
      >
        <Typography variant="h6" sx={{ marginTop: "3rem" }} gutterBottom>
          Your personal post website!
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </motion.div>
    </Container>
  );
}

export default LandingPageHero;
