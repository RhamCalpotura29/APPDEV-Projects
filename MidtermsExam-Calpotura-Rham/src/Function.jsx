import React, { useState } from 'react';

function FunctionComponent() {
  const [number, setNumber] = useState(0);

  const updateNumber = () => {
    if (number === 0 || number % 2 === 0) {
      setNumber((number + 1) * 2);
    } else {
      setNumber((number + 1) + 1);
    }
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={updateNumber}>Update Number</button>
    </div>
  );
}

export default FunctionComponent;
