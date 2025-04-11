"use client";

import React, {useState} from 'react';

const DashboardPage = () => {
const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}  />
        <p>Hello&nbsp;{name}</p>
    </div>
  );
}
export default DashboardPage;