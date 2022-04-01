import { Grid, Button, TextField, Typography } from "@mui/material";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
    let { id, name, price, quantity } = data;

    return (
        <>
            <h4>{name}</h4>
            <h5>
                ${price}.00 x {quantity} = ${price * quantity}.00
            </h5>
            <Button onClick={() => delOneFromCart(id)} variant="contained">Eliminar Uno</Button>
            
            <br />
            <Button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</Button>
            <br />
            <br />
        </>
    );
};

export default CartItem;