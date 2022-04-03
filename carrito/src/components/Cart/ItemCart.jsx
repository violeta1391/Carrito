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
            <Card sx={{ p: '1rem', textAlign: 'center', display: 'row', justifyContent: 'center'}}>
                <CardContent>
                    <Typography variant="p" color="secondary" sx={{ pb: '1rem', fontWeight: "bold" }}>
                        {item.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="150"
                    src={item.img}
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
                        <ButtonGroup color="secondary" aria-label="medium secondary button group">
                            {buttons}
                        </ButtonGroup>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};