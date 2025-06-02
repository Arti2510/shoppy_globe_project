// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from '../redux/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>${item.price} x {item.quantity}</p>
        <div className="cart-buttons">
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
