import React from "react";
import Products from "../components/Products/Products";
import { Card, Grid, Typography, Box } from "@mui/material";
import Cart from "../components/Cart/Cart";


const Home = () => {
    return (
        <Grid style={{ backgroundColor: "#f5f5f5" }}>
            <Box sx={{ fontWeight: "bold", display: 'flex', justifyContent: 'center', paddingTop: '3rem' }}>
                <Typography variant="h2" >Main Dishes</Typography>
            </Box>
            <Cart />
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid sx={{ maxWidth: '1200px' }}>
                    <Card sx={{ padding: '2rem' }} style={{ backgroundColor: "#f5f5f5" }}>
                        <Products />
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;