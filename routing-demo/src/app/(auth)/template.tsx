"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const newLinks = [
    {name: "Register", path: "/register"},
    {name: "Login", path: "/login"},
    {name: "Forgot Password", path: "/forgot-password"},
]
// interface AuthDetailLayoutProps {
//     children: string
// }


const AuthLayout = () => {
    const pathName = usePathname();
    const [input, setupInput] = useState("");
    return (
        <div>
            <div>
                <input type="text" value={input} onChange={(e) => setupInput(e.target.value)} />
            </div>
          {newLinks.map((link) =>  {
            const isActive = pathName.startsWith(link.path);
            return (
              <h2 key={link.path}>
                  <Link className={isActive ? "text-blue-500" : "text-white"}
                  href={link.path}>{link.name}</Link>
              </h2>
        
          );
        })}
        </div>
        )
    }
export default AuthLayout;