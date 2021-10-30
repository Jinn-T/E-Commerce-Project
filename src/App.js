import ProductGrid from "./containers/ProductGrid/ProductGrid";
import NavBar from "./components/Nav/Nav";
import CarouselC from "./containers/Carousel";
import Cart from "./containers/Cart";
import Product from "./containers/Product";
import CartProvider from "./context/CartContext";
// import firestore from "./services/firestore";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                    <Route exact path="/">
                        <CarouselC />
                        <ProductGrid />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </Router>
        </CartProvider>
    );
}

export default App;
