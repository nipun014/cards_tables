import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

const Cards = () => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setOutput(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {/* Map over the output array to render each product */}
        {output.map((val, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Category:{val.category}
                </Typography>
                <Typography variant="h5" component="div">
                  Title:<br/>
                  {val.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Price:${val.price}
                </Typography>
              </CardContent>
             
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
