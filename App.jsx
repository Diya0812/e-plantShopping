import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing">
          <div className="overlay">
            <h1>Paradise Nursery</h1>
            <button onClick={() => setShowProductList(true)}>
              Get Started
            </button>
          </div>
        </div>
      ) : showCart ? (
        <CartItem goBack={() => setShowCart(false)} />
      ) : (
        <ProductList goToCart={() => setShowCart(true)} />
      )}
    </div>
  );
}

export default App;
