import React from "react";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";
import { Grid } from '@mui/material';

const App = () => {
    /* Envolvemos la home con el provider del context */

    const parsePrice = parseInt("$10")
    console.log(parsePrice)

    return (
        <CartProvider>
            <Grid sx={{ m: '1.5rem' }}>
                <Home />
            </Grid>
        </CartProvider>
    );
};

export default App;