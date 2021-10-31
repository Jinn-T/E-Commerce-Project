import styles from "./ProductCart.module.scss";
import { Link } from "react-router-dom";
import { Card, Nav, Button } from "react-bootstrap";
import { useState } from "react";

const ProductCart = ({ cart }) => {
    // add a counter to add or minus quantity
    const [qty, setQty] = useState(1);

    // handler function to add qty

    const addItem = () => {
        if (qty >= cart.quantity) {
            return;
        }
        setQty(qty + 1);
        // .set or .update firestore?
    };

    const removeItem = () => {
        if (qty <= 0) {
            return;
        }
        setQty(qty - 1);
        // .set or .update firestore?
    };
    // remove button

    return (
        <div className={styles.card}>
            <Card>
                <Nav.Link as={Link} to={`/product/${cart.id}`}>
                    <Card.Img variant="top" src={cart.img} />
                </Nav.Link>

                <Card.Body className={styles.bodyText}>
                    <Card.Title>{cart.name}</Card.Title>
                    <Card.Text>Price: ${cart.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className={styles.quantity}>
                        <Button
                            className={styles.btn}
                            variant="primary"
                            size="sm"
                            onClick={addItem}
                        >
                            Add
                        </Button>
                        <large className="font-weight-bold">{qty}</large>

                        <Button
                            className={styles.btn}
                            variant="primary"
                            size="sm"
                            onClick={removeItem}
                        >
                            Remove
                        </Button>
                        <large className="font-weight-bold">
                            Total Price: ${cart.price * qty}
                        </large>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ProductCart;

{
    /* <Nav.Link as={Link} to={`/product/${cart.id}`}>
    <Button className={styles.btn} variant="primary" size="sm">
        Info
    </Button>
    <Card.Text>Price: ${cart.price}</Card.Text>
</Nav.Link>; */
}
