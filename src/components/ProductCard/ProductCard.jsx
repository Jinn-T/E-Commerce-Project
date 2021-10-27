import styles from "./ProductCard.module.scss";
import { Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Price: ${product.price}
                    Quantity: {product.quantity}
                </Card.Text>
                <Button variant="primary" size="sm">
                    Add to Cart
                </Button>
                <Nav.Link as={Link} to={`/product/${product.id}`}>
                    <Button variant="primary" size="sm">
                        Info
                    </Button>
                </Nav.Link>
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
