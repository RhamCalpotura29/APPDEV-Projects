import React from 'react';

function FavoriteFood({ items, type }) {
  if (items.length === 0) {
    return <p>I have no favorite {type}</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - {item.color} - Rating: {item.rating}
        </li>
      ))}
    </ul>
  );
}

export default FavoriteFood;

