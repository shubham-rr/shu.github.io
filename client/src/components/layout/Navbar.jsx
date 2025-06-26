import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Profile" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/etc", label: "Etc." },
  ];

  return (
    <nav className="text-[var(--primary)]">
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Left side: Name */}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold leading-none">
              SHUBHAM MAHARJAN
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-10">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)} // optional, keeps behavior consistent
                className="font-medium text-[var(--body-grey)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--muted)] hover:text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)]"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-[var(--body-grey)] hover:text-[var(--accent)] hover:bg-[var(--accent)/10] transition-colors duration-200"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
