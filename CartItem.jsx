T7
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "./CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} />
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br />
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;