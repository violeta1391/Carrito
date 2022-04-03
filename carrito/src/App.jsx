import React from "react";
import Home from "./Pages/Home";
import { CartProvider } from "./context/CartContext";
import { Grid } from '@mui/material';

const App = () => {
    /* Envolvemos la home con el provider del context */

    const parsePrice = parseInt("$10")
    console.log(parsePrice)

    return (
        <CartProvider>
            <Grid >
                <Home />
            </Grid>
        </CartProvider>
    );
};

export default App;