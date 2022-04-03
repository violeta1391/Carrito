import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
export const ItemCart = ({ item }) => {

    const { addItemToCart, deletItemToCart } = useContext(CartContext);

    const id = item;



    return (
        <div>
            <img src={item.img} alt={item.name} />
            <div>
                <div>
                    <p>{item.name}</p>
                    <div>
                        <button onClick={() => addItemToCart(item)}>
                            AGREGAR
                        </button>
                        <div>{item.amount}</div>
                        <button onClick={() => deletItemToCart(item)}>
                            SACAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};