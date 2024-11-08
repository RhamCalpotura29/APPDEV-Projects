import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 2)}>Increment by 2</button>
      <button onClick={() => setCount(count - 2)}>Decrement by 2</button>
    </div>
  );
}

export default Counter;

