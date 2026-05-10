import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "OUR STORY", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "bg-surface/95 backdrop-blur-md py-4 border-b border-border-warm shadow-sm" 
            : "bg-transparent py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="group">
            <div className="flex flex-col">
              <span className="font-display italic text-accent text-2xl leading-none">Nepal&apos;s Home</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] opacity-60">Authentic Nepali Cuisine</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-sans text-[13px] font-medium tracking-[0.1em] relative py-1",
                  location.pathname === link.path ? "text-accent" : "text-ink/70 hover:text-ink transition-colors"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-ink/60">
              <Phone size={14} className="text-accent" />
              <span className="text-xs font-medium">+977-1-4700000</span>
            </div>
            <button className="bg-accent text-ink-inv px-6 py-3 rounded-full text-[13px] font-medium tracking-[0.08em] hover:bg-accent/90 transition-colors">
              RESERVE A TABLE →
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-ink"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-surface-dark p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-ink-inv p-2"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display italic text-4xl text-ink-inv hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 text-ink-inv/60 space-y-4">
              <p className="font-sans text-sm tracking-wide">📍 Thamel Marg, Kathmandu</p>
              <p className="font-sans text-sm tracking-wide">📞 +977-1-4700000</p>
              <button className="w-full bg-accent text-white py-4 rounded-full font-medium tracking-wider">
                BOOK ONLINE →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
