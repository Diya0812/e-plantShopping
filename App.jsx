T4
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

const Home = () => (
  <div className="landing">
    <div className="overlay">
      <h1>Paradise Nursery</h1>
      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  </div>
);

const Navbar = () => (
  <nav style={{ padding: "10px", background: "#eee" }}>
    <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> |{" "}
    <Link to="/cart">Cart</Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;