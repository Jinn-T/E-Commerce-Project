import { createContext, useState } from "react";

// returns the current context value for that context
export const CartContext = createContext();

//children prop displays everything between the tags
const CartProvider = ({ children }) => {
    // set a useState for cart where we want to be able to add in each product object.
    const [cart, setCart] = useState([]);

    // Pass our data with context
    const data = { cart, setCart };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
