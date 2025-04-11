/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { useState } from "react";

const ClientComponentOne = ({children}: {
    children: React.ReactNode;
}) => {

    const [name, setName] = useState("Siva");
    return (
        <div>
        <h1>Client Component One</h1>
        {children}
        </div>
    );
}
export default ClientComponentOne;