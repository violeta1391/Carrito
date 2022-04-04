import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Card, Grid, Typography, CardMedia, CardContent } from "@mui/material";
import { BootstrapButton, BootstrapButtonDisabled } from '../Buttons/Buttons'

const Products = () => {
    const { addItemToCart, products, } = useContext(CartContext);

    return (
        <>
            <Grid container spacing={4} sx={{ display: 'row', justifyContent: 'center', padding: '.5rem' }}>
                {products &&
                    products.map((product, i) => (
                        <Grid item xs={12} md={4}>
                            <Card sx={{ pb: '1rem', textAlign: 'center', display: 'row', justifyContent: 'center' }} key={i}>
                                <CardMedia
                                    component="img"
                                    height="294"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" color="rgb(255,167,30)" sx={{ p: '1rem', fontWeight: "bold" }}>
                                        {product.name}
                                    </Typography>
                                </CardContent>
                                <Typography sx={{ p: '1rem' }} color="text.secondary">
                                    {product.description}
                                </Typography>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        {product.price}
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ pb: '1rem' }}>
                                    {product.stock !== 0 ? (
                                        <BootstrapButton variant="contained" size="large" onClick={() => addItemToCart(product)}>Agregar</BootstrapButton>
                                    ) : (
                                        <BootstrapButtonDisabled variant="contained" size="large">Sin Stock</BootstrapButtonDisabled>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

export default Products;