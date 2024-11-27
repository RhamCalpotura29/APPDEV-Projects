// ProductCard.jsx
import React from 'react';

const ProductCard = ({ image, name, description, link }) => (
  <div className="product-card">
    <img src={image} alt={name} />
    <div className="product-details">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link} className="btn-secondary">Learn More</a>
    </div>
  </div>
);

export default ProductCard;
