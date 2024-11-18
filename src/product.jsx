import React from 'react';
import './index.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Rp {product.price.toLocaleString('id-ID')}</p>
      <button className="buy-button">Beli Sekarang</button>
    </div>
  );
};

export default Product;
