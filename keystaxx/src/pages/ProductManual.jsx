import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductManual = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState("");

  const addReview = () => {
    if (input.trim()) {
      setReviews([...reviews, input]);
      setInput("");
    }
  };

  return (
    <div className="product-manual">
      <h2>{product.name}</h2>
      <div className="image-container">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <p>{product.description}</p>
      <h3>Specs:</h3>
      <ul>
        <li>Switches: {product.specs.switches}</li>
        <li>Keycaps: {product.specs.keycaps}</li>
        <li>Connection: {product.specs.connection}</li>
        <li>Material: {product.specs.material}</li>
        <li>Layout: {product.specs.layout}</li>
      </ul>

      

      {/* Reviews Section */}
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a review..."
      />
      <button onClick={addReview}>Add Review</button>
    </div>
  );
};

export default ProductManual;
