import visarLogo from "./imgs/visar-logo.png";
import textLogo from "./imgs/visar-textlogo.svg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={visarLogo} alt="Visar Logo" className="w-16 h-16" />
        <img src={textLogo} alt="Visar Text Logo" className="w-40" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-10 font-palanquin text-royal-blue text-lg mr-4">
        <a href="https://www.lazada.com.ph/shop/visar-society">Shop</a>
        <a href="https://x.com/visar_society/status/1933479471119806636">
          FAQs
        </a>
        <a href="#">Login</a>
      </nav>

      {/* Hamburger Icon */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6 text-royal-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md w-40 p-4 flex flex-col space-y-3 md:hidden z-10">
          <a href="https://www.lazada.com.ph/shop/visar-society">Shop</a>
          <a href="https://x.com/visar_society/status/1933479471119806636">
            FAQs
          </a>
          <a href="#">Login</a>
        </div>
      )}
    </header>
  );
};

export default Header;
