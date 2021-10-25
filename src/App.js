import ProductGrid from "./containers/ProductGrid/ProductGrid";
import NavBar from "./components/Nav/Nav";
import CarouselC from "./containers/Carousel";
import Cart from "./containers/Cart";
// import firestore from "./services/firestore";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <CarouselC />
                    <ProductGrid />
                </Route>
                <Route exact path="/Cart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
