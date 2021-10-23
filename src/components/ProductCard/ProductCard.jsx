import styles from "./ProductCard.module.scss";

const ProductCard = ({ products }) => {
    return (
        <div className={styles.grid}>
            {products &&
                products.map((product) => (
                    <div className={styles.card}>
                        <img src={product.img} className={styles.img}></img>
                        <div>
                            <p>{product.name}</p>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.textSpace}>
                                <p>Price: ${product.price}</p>
                            </div>
                            <div>
                                <p>Quantity:{product.quantity}</p>
                            </div>
                        </div>
                        <div className={styles.btn}>
                            <button className={styles.btnSpace}>
                                {product.favourited}favourite
                            </button>
                            <button>Add to cart!</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProductCard;
