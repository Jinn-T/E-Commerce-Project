import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProduct } from "../../services/products";
import { Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";

const Product = () => {
    // useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    const { id } = useParams();
    const [product, setProducts] = useState(null);

    useEffect(() => {
        const populateProduct = async () => {
            const data = await findProduct(id);
            setProducts(data);
        };
        populateProduct();
    }, [id]);

    console.log(product);

    if (!product) {
        return <h1>Oops, product not found!</h1>;
    }

    return (
        <div className={styles.card}>
            <Card style={{ width: "40rem" }}>
                {/* <Card.Img variant="top" src={product.img} /> */}
                <img src={product.img} className={styles.img}></img>
                <Card.Body>
                    <h2>{product.name}</h2>
                    <br></br>
                    <h6>Price: ${product.price}</h6>
                    <h6>Quantity: {product.quantity}</h6>
                    <br></br>
                    <Card.Text>{product.info}</Card.Text>
                    <Button variant="primary" size="sm">
                        Add to Cart
                    </Button>
                    <Nav.Link
                        as={Link}
                        to={`/product/${product.id}`}
                    ></Nav.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
