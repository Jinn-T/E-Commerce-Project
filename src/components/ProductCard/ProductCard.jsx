import styles from "./ProductCard.module.scss";
import { Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
    console.log(useContext(CartContext));
    // here we can use our state
    const { cart, setCart } = useContext(CartContext);

    //onclick function to push product to cart
    const cartHandler = () => {
        // need to add logic so we dont add multiple products to cart.
        if (cart.includes(product)) {
            return;
        }
        //shallow clone cart and add new product
        setCart([...cart, product]);
    };
    console.log("after click", cart);

    return (
        <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body className={styles.text}>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Price: ${product.price}
                    <br></br>
                    Stock Quantity: {product.quantity}
                </Card.Text>
                <div className={styles.btnWrapper}>
                    <Nav.Link>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={cartHandler}
                        >
                            Add to Cart
                        </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/product/${product.id}`}>
                        <Button variant="primary" size="sm">
                            Info
                        </Button>
                    </Nav.Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;

{
    /* <div className={styles.card}>
            <img src={product.img} className={styles.img} alt=""></img>
            <div>
                <h4>{product.name}</h4>
            </div>
            <div className={styles.price}>
                <div className={styles.textSpace}>
                    <p>Price: ${product.price}</p>
                </div>
                <div>
                    <p>Quantity: {product.quantity}</p>
                </div>
            </div>
            <div className={styles.btn}>
                <button className={styles.btnSpace}>
                    {product.favourited}favourite
                </button>
                <button>Add to cart!</button>
            </div>
        </div> */
}
