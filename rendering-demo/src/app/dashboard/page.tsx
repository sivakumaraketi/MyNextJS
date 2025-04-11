"use client"
import { useState } from 'react';

const Dashboard = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>this is dashboard page</h1>
            <h2>count: {count}</h2>
            <button onClick={handleClick}>click me</button>
            </div>
    )
}
export default Dashboard;