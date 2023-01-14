import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function CardComp() {
  return (
    <div>
      <Card sx={{ maxWidth: 375 }}>
        <CardMedia
          component="img"
          height="250"
          image="https://www.newshub.co.nz/home/lifestyle/2019/11/dog-years-are-a-myth-2-year-old-dogs-already-middle-aged-scientists/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1574572358818/GETTY-labrador-puppy-1120.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lizard
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardComp;
