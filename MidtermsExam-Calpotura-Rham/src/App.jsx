import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Identification from './Identification';
import FavoriteFood from './FavoriteFood';
import Counter from './Counter';
import Function from './Function';
import Paragraph from './Paragraph';
import MyCart from './MyCart';

const fruits = [
  { id: 1, name: 'Apple', color: 'Red', rating: 5 },
  { id: 2, name: 'Banana', color: 'Yellow', rating: 4 },
  { id: 3, name: 'Cherry', color: 'Red', rating: 5 },
  { id: 4, name: 'Date', color: 'Brown', rating: 3 },
  { id: 5, name: 'Elderberry', color: 'Purple', rating: 4 }
];

const porkDishes = [];

function App() {
  return (
    <div>
      <Header />
      <Identification />
      <FavoriteFood items={fruits} type="fruits" />
      <FavoriteFood items={porkDishes} type="Pork Dishes" />
      <Counter />
      <Function />
      <Paragraph />
      <MyCart />
      <Footer />
    </div>
  );
}

export default App;
