import React, { useState } from 'react';
import Login from './Login';
import Review from './Review';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {isLoggedIn ? <Review /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}
