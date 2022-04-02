import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Card, Button, Grid, Typography, CardHeader, CardMedia, CardContent } from "@mui/material";
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
        boxShadow: '0 0 0 0.2rem #f28500',    },
});

const BootstrapButtonDisabled = styled(Button)({
    cursor: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: "bold",
    fontSize: 20,
    padding: '8px 26px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: "#ffd792",
    borderColor: "#ffd792",
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
        cursor: 'none',
        backgroundColor: '#f28500',
        borderColor: '#f28500',
        boxShadow: 'none',
    },
    '&:active': {
        cursor: 'none',
        backgroundColor: '#f28500',
        borderColor: '#f28500',
    },
    '&:focus': {
        cursor: 'none',
        boxShadow: '0 0 0 0.2rem #f28500',
    },
})

const Products = () => {
    const { addItemToCart, products } = useContext(CartContext);

    return (
        <>
            <Grid container spacing={3} sx={{ display: 'row', justifyContent: 'center', padding: '.5rem' }}>
                {products &&
                    products.map((product, i) => (
                        <Grid item xs={12} md={4}>
                            <Card sx={{ p: '1rem 0rem 1rem 0rem', textAlign: 'center', display: 'row', justifyContent: 'center' }} key={i}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    src={product.img}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" color="rgb(255,167,30)" sx={{ pb: '1rem', fontWeight: "bold" }}>
                                        {product.name}
                                    </Typography>
                                </CardContent>
                                <Typography sx={{ p: '1rem' }} color="text.secondary">
                                    {product.description}
                                </Typography>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        ${product.price}
                                    </Typography>
                                </CardContent>
                                {product.stock !== 0 ? (

                                    <BootstrapButton variant="contained" size="large" onClick={() => addItemToCart(product)}>Agregar</BootstrapButton>

                                ) : (

                                    <BootstrapButtonDisabled variant="contained" size="large">Sin Stock</BootstrapButtonDisabled>

                                )}
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

export default Products;