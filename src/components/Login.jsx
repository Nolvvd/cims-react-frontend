import React, { useState } from "react";
import "../styles/Login.css"; 

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onLogin(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to CIMS</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
