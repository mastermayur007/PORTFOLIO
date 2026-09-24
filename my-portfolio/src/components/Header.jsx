import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Photography", href: "#photography" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-slate-900 transition hover:text-blue-600"
        >
          Mayur<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600 lg:inline-block"
        >
          Let's Talk →
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Let's Talk →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;