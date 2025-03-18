import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const trackDetails = {
  maths: "Master algebra, calculus, and geometry with interactive lessons.",
  physics: "Explore forces, motion, and energy with real-world applications.",
  chemistry: "Understand elements, reactions, and molecular structures.",
  biology: "Learn about cells, evolution, and human anatomy.",
  "computer-science": "Master programming, AI, and software development.",
  engineering: "Gain insights into mechanical, electrical, and civil engineering.",
};

const TrackPage = () => {
  const { trackName } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 5, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4">Welcome to {trackName.toUpperCase()} Track</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {trackDetails[trackName] || "Start exploring this subject today!"}
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/tracks")}>
        Go Back
      </Button>
    </Box>
  );
};

export default TrackPage;
