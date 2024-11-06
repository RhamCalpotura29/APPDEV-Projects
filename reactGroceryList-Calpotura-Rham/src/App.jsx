import React, { useState, useEffect } from 'react';
import GroceryItems from './GroceryItems';
import Cart from './Cart';
import Checkout from './Checkout';
import './index.css';

const App = () => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false); // Track checkout visibility
  const [isCheckout, setIsCheckout] = useState(false); // Track if checkout has started

  const items = {
    Grapes: { price: 4.99, icon: '🍇' },
    Oranges: { price: 0.99, icon: '🍊' },
    Kiwis: { price: 1.49, icon: '🥝' },
    Bananas: { price: 2.99, icon: '🍌' },
    Cucumbers: { price: 1.99, icon: '🥒' }
  };

  const addItem = (name, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [name]: (prevCart[name] || 0) + quantity,
    }));
  };

  const removeItem = (name) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[name];
      return updatedCart;
    });
  };

  useEffect(() => {
    const totalAmount = Object.keys(cart).reduce((acc, item) => {
      return acc + items[item].price * cart[item];
    }, 0);
    setTotal(totalAmount);
  }, [cart]);

  const handleProceedToCheckout = () => {
    setIsCheckout(true);
    setShowCheckout(true); // Show the checkout modal
  };

  return (
    <div className="app">
      <h1>Fresh Grocery Checkout</h1>
      <div className="content">
        <GroceryItems items={items} addItem={addItem} />
        <Cart
          cart={cart}
          items={items}
          total={total}
          onCheckout={handleProceedToCheckout} // Trigger checkout modal
          removeItem={removeItem}
          addItem={addItem}
          isCheckout={isCheckout} // Pass the state of checkout
        />
      </div>
      {showCheckout && <Checkout total={total} onBack={() => setShowCheckout(false)} />}
    </div>
  );
};

export default App;
