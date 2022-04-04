import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { CartProvider } from "./context/CartContext";
import { Grid } from '@mui/material';

const App = () => {
    return (
        <CartProvider>
            <Grid >
                <AppRouter />
            </Grid>
        </CartProvider>
    );
};

export default App;

