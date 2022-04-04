import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Button, Box, ButtonGroup, Card, Grid, CardContent, CardMedia, Typography } from "@mui/material";

export const ItemCart = ({ item }) => {

    const { addItemToCart, deletItemToCart } = useContext(CartContext);

    const id = item;

    const buttons = [
        <Button key="one" onClick={() => deletItemToCart(item)}>-</Button>,
        <Button key="two"><div>{item.amount}</div></Button>,
        <Button key="three" onClick={() => addItemToCart(item)}>+</Button>,
    ];

    return (
        <Grid item xs={12} md={2}>
            <Card sx={{textAlign: 'center', display: 'row', justifyContent: 'center', height:"300px"}}>
                <CardContent sx={{ height:"30px"}}>
                    <Typography variant="p" color="secondary" sx={{ fontWeight: "bold" }}>
                        {item.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="150px"
                    src={item.image}
                    alt={item.name}
                />
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        <ButtonGroup color="secondary" aria-label="medium secondary button group" sx={{ pb: '1rem'}}>
                            {buttons}
                        </ButtonGroup>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};