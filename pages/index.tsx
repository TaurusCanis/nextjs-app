import React from "react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const handleClick = async (method: "GET" | "POST", load?: Record<string, string>) => {
    const res = await fetch('/api/hello', {
      method: method,
      body: JSON.stringify(load),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
    setName(data.name);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => handleClick("GET")}>GET</button>
      <button onClick={() => handleClick("POST")}>POST (no data)</button>
      <button onClick={() => handleClick("POST", { name: "FUCKFACE" })}>POST (with data)</button>
      <p>{name}</p>
    </main>
  );
}
