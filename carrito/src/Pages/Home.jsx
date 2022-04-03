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
            <Card sx={{ padding: '2rem 1rem' }} style={{ backgroundColor: "#f5f5f5" }}>
                <Grid container spacing={3} sx={{ display: 'row', justifyContent: 'center', padding: '.5rem' }}>
                    <Products />
                </Grid>
            </Card>
        </Grid>
    );
};

export default Home;