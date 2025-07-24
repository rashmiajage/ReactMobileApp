import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <Dashboard />
  ) : (
    <Login onLoginSuccess={() => setIsAuthenticated(true)} />
  );
}

export default App;
