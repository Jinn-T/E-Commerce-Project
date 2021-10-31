import Header from "../Header";
import styles from "./Cart.module.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ProductCart from "../../components/ProductCart";


const Cart = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);

    return (
        <div>
            <div>
                <h1>Cart</h1>
            </div>
            <div className={styles.productContainer}>
                {cart &&
                    cart.map((product, index) => (
                        <ProductCart cart={product} key={index}></ProductCart>
                    ))}
            </div>
        </div>
    );
};

export default Cart;
