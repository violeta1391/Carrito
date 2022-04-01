import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingAction";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
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


const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products, cart } = state.shopping;

  return (
    < >
      <Card sx={{ padding: '2rem 1rem' }} style={{ backgroundColor: "#f5f5f5" }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', m: '3rem', fontWeight: "bold" }}>Main Dishes</Typography>
        </ThemeProvider>
        <Grid container spacing={3} sx={{ display: 'row', justifyContent: 'center', padding: '.5rem' }}>
          {products.map((product) => (
            <Grid item xs={12} md={4}>
              <ProductItem
                key={product.id}
                data={product}
                addToCart={() => dispatch(addToCart(product.id))}
              />
            </Grid>
          ))}
        </Grid>
        <Box>
          <Button variant="contained" sx={{ m: '1rem' }} onClick={() => dispatch(clearCart())}>Limpiar Carrito</Button>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delOneFromCart={() => dispatch(delFromCart(item.id))}
              delAllFromCart={() => dispatch(delFromCart(item.id, true))}
            />
          ))}
        </Box>
      </Card>
    </>
  );
};

export default ShoppingCart;