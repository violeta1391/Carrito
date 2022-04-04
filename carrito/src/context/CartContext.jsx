import { createContext, useEffect, useState } from "react";
import swal from 'sweetalert';
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

    const addDataLocalStorage = (data) => {

        const productosDatos = {
            produtos: localStorage.getItem('cartProducts'),
            datos: data
        }
        const productosConDatos = JSON.stringify(productosDatos)

        localStorage.setItem('cartProducts', productosConDatos)
        postProduct()
    }

    const postProduct = async (productosEnLocalStorage) => {
        try {
            const response = await axios.post("https://ait-tesapi.herokuapp.com/sales/", productosEnLocalStorage);

            localStorage.setItem('cartProducts', '')
            setCartItems([])
            swal({
                title: "Gracias!!",
                icon: 'success',
                text: "Tu compra se realizó correctamente",
                buttons: {
                    aceptar: "Aceptar"
                },
            }).then(function() {
                window.location.href = "/home";
            });            
            console.log(response)
        } catch (error) {
            swal({
                title: "Ha ocurrido un error durante el proceso de compra",
                text: "Por favor inténtalo nuevamente",
                buttons: {
                    aceptar: "Aceptar"
                },
                icon: 'error'
            })
        }
    };

    return (
        <CartContext.Provider
            value={{ cartItems, products, addItemToCart, deletItemToCart, postProduct, addDataLocalStorage }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;