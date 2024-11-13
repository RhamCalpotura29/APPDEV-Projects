import React, { useState } from 'react';

export default function Login({ setIsLoggedIn }) {
  const account = {
    username: "admin",
    password: "admin"
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (userName === account.username && password === account.password) {
      setIsLoggedIn(true);
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Wormmmy's Reviews!</h1>
      <h4>Login to Continue:</h4>
      <div className="form-group">
        <label>Username:</label>
        <input 
          type="text" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          placeholder="Enter your username" 
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password" 
        />
      </div>
      <button type="button" onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
