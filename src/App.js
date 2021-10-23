import "./App.css";
import ProductGrid from "./containers/ProductGrid/ProductGrid";
import firestore from "./services/firestore";

function App() {
    return (
        <div className="App">
            <ProductGrid />
        </div>
    );
}

export default App;
