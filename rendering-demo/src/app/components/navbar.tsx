//create a navbar component
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
        <div className="text-lg font-bold">My App</div>
        <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
            Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
            About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
            Contact
            </Link>
        </div>
        </nav>
    );
    }
export default Navbar;