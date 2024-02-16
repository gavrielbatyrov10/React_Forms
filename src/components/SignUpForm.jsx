import React, { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello");
  }
  async function handleEvent() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();

      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>SignUpForm</h2>
      <form onSubmit={handleSubmit}>
        <label>
          username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleEvent}>Submit</button>
      </form>
    </>
  );
}
