import { useState } from "react";
import Shop from "./Shop";
import AdminPanel from "./AdminPanel";

export default function Login() {
  const items = [
    { id: 1, name: "Grapes", price: 50 },
    { id: 2, name: "Orange", price: 20 },
    { id: 3, name: "Pickles", price: 40 },
  ];

  const accounts = [
    { id: 1, username: "customer", password: "customer", role: "customer" },
    { id: 2, username: "admin", password: "admin", role: "admin" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function getUserName(event) {
    setEnteredUsername(event.target.value);
  }

  function getPassword(event) {
    setEnteredPassword(event.target.value);
  }

  function handleLogin() {
    const user = accounts.find(
      (account) =>
        account.username === enteredUsername &&
        account.password === enteredPassword
    );

    if (user) {
      setIsLoggedIn(true);
      setRole(user.role);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  }

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div>
          <h1>Login</h1>
          <label>
            Username:
            <input type="text" placeholder="Enter username" onChange={getUserName} />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter password" onChange={getPassword} />
          </label>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : role === "admin" ? (
        <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts} />
      ) : (
        <Shop isLoggedIn={isLoggedIn} items={items} />
      )}
    </div>
  );
}
