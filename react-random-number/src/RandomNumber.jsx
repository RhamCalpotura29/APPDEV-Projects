import React, { useState } from 'react';

function RandomNumber() {
  const [number, setNumber] = useState(0);
  const [isPositive, setIsPositive] = useState(true); // State to track the sign

  const incrementBy5 = () => setNumber((prev) => prev + 5);
  const decrementBy5 = () => setNumber((prev) => prev - 5);
  const incrementBy1 = () => setNumber((prev) => prev + 1);
  const decrementBy1 = () => setNumber((prev) => prev - 1);
  const resetNumber = () => setNumber(0);
  
  // Generate alternating random number
  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 200) + 1;
    setNumber(isPositive ? randomNum : -randomNum); // Set positive or negative based on state
    setIsPositive(!isPositive); // Alternate the state for the next number
  };

  return (
    <div className="random-number-container">
      <h1 className="random-number">{number}</h1>
      <div className="button-container">
        <button className="button" onClick={incrementBy5}>Increment by 5</button>
        <button className="button" onClick={resetNumber}>Reset</button>
        <button className="button" onClick={decrementBy5}>Decrement by 5</button>
        <button className="button" onClick={incrementBy1}>Increment by 1</button>
        <button className="button" onClick={decrementBy1}>Decrement by 1</button>
        <button className="button" onClick={generateRandomNumber}>Random</button>
      </div>
    </div>
  );
}

export default RandomNumber;

