import React, { useState } from "react";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        onLoginSuccess();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="mobile-frame">
      <div className="login-box">
        <h2 className="title">WELLS FARGO</h2>
        <p className="greeting">Good morning 👋</p>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button onClick={handleLogin}>Sign On</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
