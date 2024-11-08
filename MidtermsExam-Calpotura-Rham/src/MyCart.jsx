import React, { useState } from 'react';

function MyCart() {
  const [myCart, setMyCart] = useState([]);
  const [item, setItem] = useState('');

  const addItem = () => {
    if (item.trim()) {
      setMyCart([...myCart, item]);
      setItem('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Enter item" 
      />
      <button onClick={addItem}>Add to Cart</button>
      <ul>
        {myCart.map((cartItem, index) => (
          <li key={index}>{cartItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyCart;

