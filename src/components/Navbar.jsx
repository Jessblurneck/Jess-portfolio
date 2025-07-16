import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[i].href.replace("#", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 md:px-8 flex items-center justify-between md:justify-center">
        {/* Hamburger Button - Mobile */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium text-white text-sm backdrop-blur-xl bg-white/10 px-8 py-3 rounded-xl shadow-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 group transition-colors duration-300 ${
                    isActive ? "text-cyan-400" : "text-white/70"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] w-full origin-center transform scale-x-0 opacity-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 ${
                      isActive
                        ? "scale-x-100 opacity-100 bg-cyan-400 shadow-[0_0_6px_cyan,0_0_10px_cyan]"
                        : "bg-white"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="backdrop-blur-xl bg-white/10 rounded-xl shadow-md p-4">
            <ul className="space-y-3 text-white text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-4 rounded-md transition hover:bg-white/20"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
