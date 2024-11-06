import React from 'react';

const GroceryItems = ({ items, addItem }) => {
  return (
    <div className="grocery-items">
      {Object.entries(items).map(([name, { price, icon }]) => (
        <div className="grocery-card" key={name}>
          <div className="grocery-icon">{icon}</div>
          <h3>{name}</h3>
          <p>${price.toFixed(2)}</p>
          <button onClick={() => addItem(name, 1)}>+ Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default GroceryItems;