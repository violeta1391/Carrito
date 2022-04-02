import React from "react";
import Cart from "./Cart/Cart";
import Products from "./Products";
import { Card, Button, Box, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
    },
});

const Home = () => {
    return (
        <>
            <Card sx={{ padding: '2rem 1rem' }} style={{ backgroundColor: "#f5f5f5" }}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', m: '3rem', fontWeight: "bold" }}>Main Dishes</Typography>
                </ThemeProvider>
                <Grid sx={{ padding: '1rem', display: 'flex', justifyContent: 'rigth', m: '3rem', fontWeight: "bold" }} >
                    <Cart />
                </Grid>
                <Grid container spacing={3} sx={{ display: 'row', justifyContent: 'center', padding: '.5rem' }}>
                    <Products />
                </Grid>
            </Card>
        </>
    );
};

export default Home;