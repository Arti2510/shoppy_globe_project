// src/components/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="container product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
