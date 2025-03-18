import React from "react";

import { Box, Button, Card, CardContent, Typography, LinearProgress, Grid } from "@mui/material";
import { School, Assignment, Build, RocketLaunch } from "@mui/icons-material"; // Import icons

const labels = [

  { text: "Review", icon: <School fontSize="large" /> },
  { text: "Assess", icon: <Assignment fontSize="large" /> },
  { text: "Practice", icon: <Build fontSize="large" /> },
  { text: "Apply", icon: <RocketLaunch fontSize="large" /> }
];
const Dashboard = () => {
  const handleContinue = () => {
    alert("Continuing your progress");
  };

  return (
    <Box sx={{ padding: "0px", flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Left Column - Certification Progress & Review Sections */}
        <Grid item xs={12} md={7}>
          {/* Certification Progress Section */}
          <Card sx={{ padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h6">STEM Learning Made Easy</Typography>
              <Typography variant="body1">You're currently Learning Collisions Chapter in Physics.</Typography>
              <Typography variant="h6" sx={{ marginTop: "10px" }}>Introduction to Collision</Typography>
              <LinearProgress variant="determinate" value={20} sx={{ height: 10, borderRadius: 5, mt: 2 }} />
              <Typography variant="body2">⏳ 5 hours to go</Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 2, backgroundColor: "#00C853", "&:hover": { backgroundColor: "#009624" } }}
                onClick={handleContinue}
              >
                Keep Making Progress
              </Button>
            </CardContent>
          </Card>

          {/* Review, Assess, Practice, Apply Sections */}
       
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
  {labels.map((item, index) => (
    <Card key={index} sx={{ padding: "10px", borderRadius: "10px", textAlign: "center" }}>
      <CardContent>
        {item.icon} {/* Icon for each card */}
        <Typography variant="h6" sx={{ mt: 1 }}>{item.text}</Typography>
        <Typography variant="body2">Description for {item.text}</Typography>
      </CardContent>
    </Card>
  ))}
</Box>
        </Grid>

        {/* Right Column - Daily Streak & Leaderboard */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", gap: 2, marginBottom: "20px" }}>
            <Card sx={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: "10px" }}>
              <Typography variant="h6">🔥 Daily Streak</Typography>
              <Typography variant="h5">0 Days</Typography>
            </Card>
            <Card sx={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: "10px" }}>
              <Typography variant="h6">⭐ Total XP</Typography>
              <Typography variant="h5">36,321 XP</Typography>
            </Card>
          </Box>

          {/* Leaderboard Section */}
          <Card sx={{ padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h6">Leaderboard</Typography>
              <Typography variant="body2">Gain 250XP to enter this week's leaderboard</Typography>
              <LinearProgress variant="determinate" value={0} sx={{ height: 10, borderRadius: 5, mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>

        {/* DataLab Section Below */}
        <Grid item xs={12}>
          <Card sx={{ padding: "15px", borderRadius: "10px", color: "#fff", backgroundColor: "#00C853" }}>
            <CardContent>
              <Typography variant="h6">Completed Labs</Typography>
              <Typography variant="body2">Project: Experiment on Force</Typography>
              <Typography variant="caption">Pravin Raju T M - Jul 4 at 08:58</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;