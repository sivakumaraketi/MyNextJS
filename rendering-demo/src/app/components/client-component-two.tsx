/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
const ClientComponentTwo = () => {

    const [name, setName] = useState("Siva");
    return (
        <div>
        <h1>Client Component Two</h1>
         </div>
    );
}
export default ClientComponentTwo;