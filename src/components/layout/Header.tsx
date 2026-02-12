import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoPng from "@/assets/logo.png";

const navItems = [{
  label: "For Job Seekers",
  href: "/job-seekers"
}, {
  label: "For Employers",
  href: "/employers"
}, {
  label: "About Us",
  href: "/about"
}, {
  label: "Apply Now",
  href: "/apply"
}];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary border-b border-navy-light/30">
        <div className="container-main flex items-center justify-end gap-4 py-1 px-4 text-sm flex-wrap">
          <a href="tel:4169481058" className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Phone className="w-3 h-3" />
            <span>416-948-1058</span>
          </a>
          <a href="mailto:Info@atspro.ca" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Contact Us
          </a>
          <div className="flex items-center gap-1 text-primary-foreground/80">
            <span className="w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center text-xs">🇨🇦</span>
            <span>Canada (English)</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-primary/95 backdrop-blur-sm">
        <div className="container-main flex items-center justify-between py-2 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              alt="Apex Pro Talent Services"
              className="h-24 w-auto"
              src={logoPng}
            />
            <span className="text-lg font-heading font-bold text-primary-foreground tracking-tight leading-tight hidden sm:block">
              Apex Pro<br />
              <span className="text-xs font-medium tracking-wider text-primary-foreground/80">Talent Services</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.label} to={item.href} className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/blog" className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors">
              Blog
            </Link>
            <Link to="/search" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <Search className="w-4 h-4" />
              <span className="font-medium">Search Jobs</span>
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <User className="w-4 h-4" />
              <span className="font-medium">Sign In/Up</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary-foreground p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-navy-light/30"
          >
            <div className="container-main py-4 px-4 flex flex-col gap-4">
              {navItems.map(item => (
                <Link key={item.label} to={item.href} className="text-primary-foreground/90 hover:text-primary-foreground font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <hr className="border-navy-light/30" />
              <Link to="/blog" className="text-primary-foreground/90 py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/search" className="flex items-center gap-2 text-primary-foreground/90 py-2" onClick={() => setIsMenuOpen(false)}>
                <Search className="w-4 h-4" />
                <span>Search Jobs</span>
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-primary-foreground/90 py-2" onClick={() => setIsMenuOpen(false)}>
                <User className="w-4 h-4" />
                <span>Sign In/Up</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
