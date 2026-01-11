import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import mistLogo from "@/assets/mist-logo.png";

const navLinks = [
  { name: "Ana Səhifə", path: "/" },
  { name: "Haqqımızda", path: "/experience" },
  { name: "Menyu", path: "/menu" },
  { name: "Qalereya", path: "/gallery" },
  { name: "Rezervasiya", path: "/contact" },
];

const languages = [
  { code: "AZ", active: true },
  { code: "RU", active: false },
  { code: "EN", active: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img
              src={mistLogo}
              alt="Mist Restaurant"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`font-mono text-sm tracking-wider uppercase transition-colors duration-300 ${location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.name}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-foreground"
                  initial={{ width: 0 }}
                  animate={{
                    width: location.pathname === link.path ? "100%" : 0,
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center gap-2 font-mono text-sm tracking-wider">
            {languages.map((lang, index) => (
              <span key={lang.code} className="flex items-center">
                <button
                  className={`transition-colors duration-300 ${lang.active
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {lang.code}
                </button>
                {index < languages.length - 1 && (
                  <span className="text-muted-foreground/50 ml-2">/</span>
                )}
              </span>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-3xl tracking-wide ${location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8 flex items-center gap-4 font-mono text-lg"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`transition-colors duration-300 ${lang.active
                      ? "text-foreground font-bold"
                      : "text-muted-foreground"
                      }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
