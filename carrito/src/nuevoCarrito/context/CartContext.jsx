import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        await axios
            .get("https://ait-tesapi.herokuapp.com/products")
            .then(({ data }) => setProducts(data.products));
    };

    const [cartItems, setCartItems] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        }
        catch (error) {
            return []
        }
    });

    useEffect(() => {
        getProducts()
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    }, [cartItems]);

    const addItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart._id === product._id
        )
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart._id === product._id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productInCart;
                })
            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }])
        }

    }

    const deletItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart._id === product._id
        )
        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart._id !== product._id)
            )
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart._id === product._id) {
                        return { ...inCart, amount: inCart.amount - 1 }
                    } else return productInCart;
                })
            )
        }
    }

    const postProduct = async (productosEnLocalStorage) => {

        const response = await axios.post("https://ait-tesapi.herokuapp.com/sales/", productosEnLocalStorage);       

        if (response.status === 201 ) {
            localStorage.setItem('cartProducts', '')
            setCartItems([])
            alert('creado')
        }
    };


    return (
        <CartContext.Provider
            value={{ cartItems, products, addItemToCart, deletItemToCart, postProduct }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;