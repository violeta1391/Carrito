import { Provider } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import store from "./store";
import { useFetch } from "./hooks/useFetch";
import { Grid } from '@mui/material';

function App() {

  const dataTurn = useFetch(`https://ait-tesapi.herokuapp.com/products`)
  console.log(dataTurn)

  return (
    <Provider store={store}>
      <Grid sx={{ m: '1.5rem' }}>
        <ShoppingCart />
      </Grid>
    </Provider>
  );
}

export default App;