import { useState } from "react";
import Login from "./Login";

export default function AdminPanel({ isLoggedIn, accounts }) {
  const [devlogs, setDevlogs] = useState([]);

  function AddDevlogs() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = new Date().toISOString().split("T")[0];

    const devlog = { title, content, date };

    setDevlogs((prevDevlogs) => [...prevDevlogs, devlog]);

    // Clear the input fields
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  }

  const renderAccounts = () =>
    accounts.map((account) => (
      <div key={account.id}>
        <h2>{account.username}</h2>
        <p>{account.role}</p>
      </div>
    ));

  const renderDevlogsHistory = () =>
    devlogs.map((devlog, index) => (
      <div key={index}>
        <h2>{devlog.title}</h2>
        <p>{devlog.date}</p>
        <p>{devlog.content}</p>
      </div>
    ));

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div>
      <h1>This is the Admin Panel</h1>
      <p>These are the Active Accounts</p>
      {renderAccounts()}
      <br />
      <hr />

      <h4>Admin DevLogs</h4>
      <label>Title:</label>
      <input type="text" id="title" />
      <br />
      <br />
      <label>Content:</label>
      <br />
      <textarea id="content" cols="50" rows="10"></textarea>
      <br />
      <button onClick={AddDevlogs}>Submit</button>
      <br />
      <br />
      <h4>Devlog History</h4>
      {renderDevlogsHistory()}
    </div>
  );
}
