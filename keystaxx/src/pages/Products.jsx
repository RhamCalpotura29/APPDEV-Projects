import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const Products = () => {
  const [filteredCategory, setFilteredCategory] = useState('');

  // Filter products based on the selected category
  const filteredProducts = filteredCategory
    ? products.filter((product) => product.category === filteredCategory)
    : products;

  return (
    <div className="products-page">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* Category Filter Buttons */}
      <div className="filters mb-6">
        <button
          onClick={() => setFilteredCategory('')}
          className="filter-btn show-all"
        >
          Show All
        </button>
        <button
          onClick={() => setFilteredCategory('Mechanical')}
          className="filter-btn mechanical"
        >
          Mechanical
        </button>
        <button
          onClick={() => setFilteredCategory('Artisan')}
          className="filter-btn artisan"
        >
          Artisan
        </button>
        <button
          onClick={() => setFilteredCategory('Regular')}
          className="filter-btn regular"
        >
          Regular
        </button>
      </div>

      {/* Product Listing */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.category}</p>
            <img src={product.image} alt={product.name} />
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="font-semibold text-lg">Price: ${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="view-details-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
