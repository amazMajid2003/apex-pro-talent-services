import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";
import logoPng from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const navItems = [
    { label: t("nav.forJobSeekers"), href: "/job-seekers" },
    { label: t("nav.forEmployers"), href: "/employers" },
    { label: t("nav.aboutUs"), href: "/about" },
    { label: t("nav.applyNow"), href: "/apply" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
    // Set dir for RTL languages
    document.documentElement.dir = code === "ur" ? "rtl" : "ltr";
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary border-b border-navy-light/20">
        <div className="container-main flex items-center justify-end gap-6 text-sm flex-wrap px-6 py-1.5">
          <a href="tel:4169481058" className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="w-3 h-3" />
            <span>416-948-1058</span>
          </a>
          <a href="mailto:Info@atspro.ca" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            {t("nav.contactUs")}
          </a>
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <span className="w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center text-xs">{currentLang.flag}</span>
              <span>{currentLang.country} ({currentLang.label})</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
            </button>
            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-md shadow-lg z-50 min-w-[180px] py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-3 py-2 text-sm flex items-center gap-2 hover:bg-accent transition-colors text-left ${
                        lang.code === i18n.language ? "bg-accent font-semibold" : ""
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.country} ({lang.label})</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-primary/95 backdrop-blur-md shadow-lg border-b border-navy-light/10">
        <div className="container-main flex items-center justify-between py-3 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              alt="Apex Pro Talent Services"
              className="h-16 w-auto"
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
              <Link key={item.href} to={item.href} className="text-primary-foreground/85 hover:text-primary-foreground font-semibold text-base tracking-wide transition-colors py-1 border-b-2 border-transparent hover:border-secondary">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/blog" className="text-primary-foreground/85 hover:text-primary-foreground font-semibold text-base tracking-wide transition-colors py-1 border-b-2 border-transparent hover:border-secondary">
              {t("nav.blog")}
            </Link>
            <Link to="/search" className="flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground transition-colors py-1">
              <Search className="w-4 h-4" />
              <span className="font-semibold text-base tracking-wide">{t("nav.searchJobs")}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary-foreground" aria-label="Toggle menu">
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
            <div className="flex flex-col px-4 py-2">
              {navItems.map(item => (
                <Link key={item.href} to={item.href} className="text-primary-foreground/90 hover:text-primary-foreground font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <hr className="border-navy-light/30" />
              <Link to="/blog" className="text-primary-foreground/90 py-2" onClick={() => setIsMenuOpen(false)}>{t("nav.blog")}</Link>
              <Link to="/search" className="flex items-center gap-2 text-primary-foreground/90 py-2" onClick={() => setIsMenuOpen(false)}>
                <Search className="w-4 h-4" />
                <span>{t("nav.searchJobs")}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
