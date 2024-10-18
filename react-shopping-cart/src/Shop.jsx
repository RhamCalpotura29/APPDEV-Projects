import { useState } from "react";

export default function Shop({ items, isLoggedIn }) {
  const [cart, setCart] = useState([]);

  function addItems(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  const renderItems = () =>
    items.map((item) => (
      <div className="shop-item" key={item.id}>
        <li>{item.name}</li>
        <p>Price per piece: ${item.price}</p>
        <button onClick={() => addItems(item)}>Add to Cart</button>
      </div>
    ));

  const renderCart = () =>
    cart.map((product, index) => (
      <div className="cart-item" key={index}>
        <li>{product.name}</li>
        <p>Price: ${product.price}</p>
      </div>
    ));

  return (
    <div className="container">
      <h1>Shop</h1>
      <ul>{renderItems()}</ul>
      <h4>Cart Items</h4>
      <ul>{renderCart()}</ul>
    </div>
  );
}
