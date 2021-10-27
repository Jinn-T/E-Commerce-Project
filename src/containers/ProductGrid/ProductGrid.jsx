// have logic in the container so we can pass down to our card
import ProductCard from "../../components/ProductCard";
import firestore from "../../services/firestore";
import { useEffect, useState } from "react";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
    //setting state for our product data
    const [products, setProducts] = useState(null);

    // grabbing our data from databse
    useEffect(() => {
        const getProducts = async () => {
            const colRef = firestore.collection("products");
            const snapshot = await colRef.get();
            console.log(snapshot);
            const cleaned = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(cleaned);
            setProducts(cleaned); // now setting our product value to the object we grabbed from our database
        };

        getProducts();
    }, []); // empty array so it doesnt run for every change of state and only on mount

    console.log(products);
    return (
        <div className={styles.grid}>
            {products &&
                products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
        </div>
    );
};

export default ProductGrid;
