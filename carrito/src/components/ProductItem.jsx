import * as React from 'react';
import { Card, Button, Box, Typography, CardHeader, CardMedia, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: "bold",
    fontSize: 20,
    padding: '8px 26px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: "#ffa460",
    borderColor: "rgb(255,167,30)",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#f28500',
      borderColor: '#f28500',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#f28500',
      borderColor: '#f28500',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #f28500',
    },
  });


const ProductItem = ({ data, addToCart }) => {
    let { id, name, price } = data;

    const img = "/static/images/cards/paella.jpg"
    const text = 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes'

    return (
        <>
            <Card sx={{ p: '1rem 0rem 1rem 0rem', textAlign: 'center', display: 'row', justifyContent: 'center' }}>
                <Typography variant="h5" color="rgb(255,167,30)" sx={{ pb: '1rem', fontWeight: "bold" }}>
                    {name}
                </Typography>
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt={name}
                />
                <Typography sx={{ p: '1rem' }} color="text.secondary">
                    {text}
                </Typography>
                <CardContent>
                    <Typography variant="h6"  sx={{ fontWeight: "bold" }}>
                        ${price}
                    </Typography>
                </CardContent>
                <CardContent>
                    <BootstrapButton variant="contained" size="large" onClick={() => addToCart(id)}>Agregar</BootstrapButton>
                </CardContent>
            </Card>
        </>
    );
};

export default ProductItem;