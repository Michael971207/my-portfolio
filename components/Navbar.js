import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Michael&apos;s Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="hover:text-gray-400">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-gray-400">About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="hover:text-gray-400">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-gray-400">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
