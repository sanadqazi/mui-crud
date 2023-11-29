import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Grid, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CardComp({title, body, id, onDelete}) {
  // Read More in Cards
  const [isReadMore, setIsReadMore] = useState(true);

  // Read More Toggle
  const readMoreToggle = () => {
    setIsReadMore(!isReadMore);
  }
  return (
    <Grid item key={id} xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt={title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {title.length <= 20? title: (title.substr(0, 20) + "...")}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt: 1, mb: 1}}>
                {isReadMore?(body.substr(0, 80) + "...") : body }
                
              </Typography>
              <Typography
            variant="span"
            color="Highlight"
            onClick={readMoreToggle}
            style={{ cursor: 'pointer'}}
          >
            {isReadMore ? 'Read More' : 'Read Less'}
          </Typography>
            </CardContent>
            <CardActions>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
                <Button variant="contained" sx={{m:1}} component={Link} to={`/edit/${id}`}>Edit</Button>
                <Button id={id} variant="contained" onClick={onDelete} style={{backgroundColor: "#D7191C"}} sx={{m:1}}>Delete</Button>
            </Grid>
            </CardActions>
          </Card>
        </Grid>
  )
}

export default CardComp