T6
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Rose", price: 12, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Tulip", price: 18, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Sunflower", price: 14, category: "Outdoor", img: "https://via.placeholder.com/100" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(p => (
        <div key={p.id}>
          <img src={p.img} alt={p.name} />
          <h4>{p.name}</h4>
          <p>${p.price}</p>
          <button
            onClick={() => dispatch(addToCart(p))}
            disabled={isAdded(p.id)}
          >
            {isAdded(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;