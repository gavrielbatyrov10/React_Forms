import React, { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate Token</h2>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
