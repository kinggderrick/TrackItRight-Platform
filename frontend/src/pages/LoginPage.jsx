import React, { useState } from "react";
import "./LoginPage.css"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      console.log("Login success:", data);

      // Save user in localStorage for later use
      localStorage.setItem("user", JSON.stringify(data));

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container fade-in">
      <h2 className="login-title">Login to TrackItRight</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
