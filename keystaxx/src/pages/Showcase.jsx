import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';  

const Showcase = () => {
  return (
    <div className="showcase">
      <h2>Our Showcase</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Manual</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
