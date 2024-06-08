import React, { useState } from "react";
import axios from "axios";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const res = await axios.post("/api/login", data);
    console.log(res);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: "10px", padding: "8px" }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default login;
