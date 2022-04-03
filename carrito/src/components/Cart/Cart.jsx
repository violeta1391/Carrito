import { useContext, useEffect, useState } from "react";
import { ItemCart } from "./ItemCart";
import CartContext from "../../context/CartContext";
import { Card, Box, Grid, Typography, CardHeader, CardMedia, CardContent } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';
import { BootstrapButton } from '../Buttons/Buttons'

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);
    const { cartItems, postProduct } = useContext(CartContext);

    useEffect(() => {
        setProductsLength(
            cartItems?.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);

    const total = cartItems?.reduce(function (previous, current) {
        const precio = parseFloat(current.price.slice(1))
        return previous + current.amount * precio;
    }, 0);

    return (
        <Card sx={{ bgcolor: "#f5f5f5", boxShadow: "none", padding: '0 2rem 2rem 2rem' }}>
            <Box sx={{ textAlign: 'right' }}
                onClick={() => setCartOpen(!cartOpen)}
            >
                <Box>
                    {!cartOpen ? (
                        <ShoppingCartIcon sx={{ color: "rgb(255,167,30)", fontSize: 40, cursor: 'pointer'}}></ShoppingCartIcon>
                    ) : (
                        <CancelIcon sx={{ color: "rgb(255,167,30)", fontSize: 40, cursor: 'pointer' }}></CancelIcon>
                    )}
                </Box>
                {!cartOpen && (
                    <Box>{productsLength}</Box>
                )}
            </Box>

            {cartItems && cartOpen && (
                <div>
                    <Typography variant="h3" color='secondary' sx={{ pb: '1rem', fontWeight: "bold", mb: '3rem' }}>
                        Mis compras
                    </Typography>
                    {cartItems.length === 0 ? (
                        <Typography variant="h5" color='secondary' sx={{ pb: '1rem', fontWeight: "bold" }}>
                            Tu carrito esta vacio
                        </Typography>
                    ) : (
                        <Grid container spacing={3} sx={{ display: 'row', justifyContent: 'left', padding: '.5rem' }}>
                            {cartItems.map((item, i) => (
                                <ItemCart key={i} item={item} />
                            ))}
                        </Grid>
                    )}
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: '3rem'}}>
                        <Card sx={{ p: '2rem' }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h5" color='secondary' sx={{ fontWeight: "bold", paddingRight: '2rem', }}>
                                        Total: ${total.toFixed(2)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <BootstrapButton onClick={() => postProduct()}>Comprar</BootstrapButton>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                </div>
            )}
        </Card>
    );
};

export default Cart;