import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container } from "@mui/material";
import Bio from "../assets/bio.jpg";
import Chem from "../assets/Chem.jpg";
import Phy from "../assets/physics.jpg"; 

// Sample experiments data
const experiments = [
  {
    title: "Chemistry Lab",
    desc: "Explore chemical reactions and test your hypotheses.",
    img: Bio
  },
  {
    title: "Physics Experiment",
    desc: "Understand Newton's laws with real-world simulations.",
    img: Chem
  },
  {
    title: "Biology Dissection",
    desc: "Learn anatomy through interactive virtual dissections.",
    img: Phy
  },
  {
    title: "Biology Dissection",
    desc: "Learn anatomy through interactive virtual dissections.",
    img: Bio
  }
  ,{
    title: "Biology Dissection",
    desc: "Learn anatomy through interactive virtual dissections.",
    img: Phy
  },{
    title: "Biology Dissection",
    desc: "Learn anatomy through interactive virtual dissections.",
    img: Chem
  },{
    title: "Biology Dissection",
    desc: "Learn anatomy through interactive virtual dissections.",
    img: "https://source.unsplash.com/300x200/?biology,dissection"
  },{
    title: "Biology Dissection",
    desc: "Learn anatomy through interactive virtual dissections.",
    img: "https://source.unsplash.com/300x200/?biology,dissection"
  }

];
const Labs = () => {
  return (
    <Container sx={{ padding: "40px", borderRadius: "16px" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Virtual Labs
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {experiments.map((exp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: "12px", boxShadow: 3, textAlign: "center" }}>
              <CardMedia component="img" height="140" image={exp.img} alt={exp.title} />
              <CardContent>
                <Typography variant="h6">{exp.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {exp.desc}
                </Typography>
                <Typography variant="subtitle1" color="primary" mt={1}>
               
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Start Lab
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Labs;
