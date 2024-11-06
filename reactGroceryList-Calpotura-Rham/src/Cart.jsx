import React from 'react';

const Cart = ({ cart, items, total, onCheckout, removeItem, addItem }) => {
  const handleChangeQuantity = (item, quantityChange) => {
    if (cart[item] + quantityChange > 0) {
      addItem(item, quantityChange);
    } else if (cart[item] === 1 && quantityChange === -1) {
      removeItem(item); // Remove item from cart when quantity is 0
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        Object.keys(cart).map((item) => (
          <div className="cart-item" key={item}>
            <span>{items[item].icon} {item}</span>
            <span>${items[item].price.toFixed(2)}</span>
            <div>
              <button onClick={() => handleChangeQuantity(item, -1)}>-</button>
              <span>{cart[item]}</span>
              <button onClick={() => handleChangeQuantity(item, 1)}>+</button>
            </div>
            <button className="remove-button" onClick={() => removeItem(item)}>Remove</button>
          </div>
        ))
      )}
      <p>Total: ${total.toFixed(2)}</p>
      <button className="checkout-button" onClick={onCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
