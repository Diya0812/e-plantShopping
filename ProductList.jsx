import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = {
  Indoor: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Indoor Plant ${i + 1}`,
    price: 10 + i,
    img: "https://via.placeholder.com/100"
  })),
  Outdoor: Array.from({ length: 6 }, (_, i) => ({
    id: i + 7,
    name: `Outdoor Plant ${i + 1}`,
    price: 15 + i,
    img: "https://via.placeholder.com/100"
  })),
  Medicinal: Array.from({ length: 6 }, (_, i) => ({
    id: i + 13,
    name: `Medicinal Plant ${i + 1}`,
    price: 20 + i,
    img: "https://via.placeholder.com/100"
  }))
};

const ProductList = ({ goToCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAdded = (id) => cart.some(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <nav>
        Home | Plants |{" "}
        <button onClick={goToCart}>Cart ({totalCount})</button>
      </nav>

      <h2>Our Plants</h2>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants[category].map(p => (
            <div key={p.id}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>

              <button
                onClick={() => dispatch(addItem(p))}
                disabled={isAdded(p.id)}
              >
                {isAdded(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
