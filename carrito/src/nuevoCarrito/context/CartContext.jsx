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
            (productInCart) => productInCart.id = product.id
        )
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id = product.id) {
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
            (productInCart) => productInCart.id === product.id
        )
        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            )
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount - 1 }
                    } else return productInCart;
                })
            )
        }
    }

    //const productosEnLocalStorage = localStorage.getItem('cartProducts')

    /*
    const postProduct = async (productosEnLocalStorage) => {
    
      const { name, img, price } = product;
  
      await axios.post("http://localhost:4000/products-cart", { name, img, price });      
    };
    */

    return (
        <CartContext.Provider
            value={{ cartItems, products, addItemToCart, deletItemToCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;