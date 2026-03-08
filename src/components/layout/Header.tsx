import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";
import logoPng from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const navItems = [
    { label: t("nav.forJobSeekers"), href: "/job-seekers" },
    { label: t("nav.forEmployers"), href: "/employers" },
    { label: t("nav.aboutUs"), href: "/about" },
    { label: t("nav.applyNow"), href: "/apply" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
    document.documentElement.dir = code === "ur" ? "rtl" : "ltr";
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary border-b border-navy-light/20">
        <div className="container-main flex items-center justify-end gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap px-4 sm:px-6 py-1.5">
          <a href="tel:4169481058" className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="w-3 h-3" />
            <span>416-948-1058</span>
          </a>
          <a href="mailto:Info@atspro.ca" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors hidden sm:inline">
            {t("nav.contactUs")}
          </a>
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <span className="w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center text-xs">{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.country} ({currentLang.label})</span>
              <span className="sm:hidden">{currentLang.label}</span>
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
        <div className="container-main flex items-center justify-between py-2 lg:py-3 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              alt="Apex Pro Talent Services"
              className="h-14 sm:h-16 lg:h-20 w-auto"
              src={logoPng}
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary-foreground tracking-tight leading-tight hidden sm:block">
              Apex Pro<br />
              <span className="text-xs lg:text-sm font-medium tracking-wider text-primary-foreground/80">Talent Services</span>
            </span>
          </Link>

          {/* Desktop Navigation — only shows at lg (1024px+) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-primary-foreground/85 hover:text-primary-foreground font-semibold text-base xl:text-lg tracking-wide transition-colors py-1 border-b-2 ${
                  isActive(item.href) ? "border-secondary text-primary-foreground" : "border-transparent hover:border-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions — desktop */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link
              to="/blog"
              className={`text-primary-foreground/85 hover:text-primary-foreground font-semibold text-base xl:text-lg tracking-wide transition-colors py-1 border-b-2 ${
                isActive("/blog") ? "border-secondary text-primary-foreground" : "border-transparent hover:border-secondary"
              }`}
            >
              {t("nav.blog")}
            </Link>
            <Link to="/search" className="flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground transition-colors py-1">
              <Search className="w-5 h-5" />
              <span className="font-semibold text-base xl:text-lg tracking-wide">{t("nav.searchJobs")}</span>
            </Link>
          </div>

          {/* Mobile/Tablet menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-primary-foreground p-2 rounded-md hover:bg-primary-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-primary border-t border-navy-light/20 shadow-2xl overflow-hidden"
          >
            <div className="container-main px-4 sm:px-6 py-4">
              {/* Nav Links */}
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-lg font-semibold transition-all ${
                        isActive(item.href)
                          ? "bg-secondary/15 text-primary-foreground border-l-4 border-secondary"
                          : "text-primary-foreground/90 hover:bg-primary-foreground/5 hover:text-primary-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <div className="my-4 border-t border-primary-foreground/10" />

              {/* Secondary Links */}
              <div className="space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    to="/blog"
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-lg font-semibold transition-all ${
                      isActive("/blog")
                        ? "bg-secondary/15 text-primary-foreground border-l-4 border-secondary"
                        : "text-primary-foreground/90 hover:bg-primary-foreground/5 hover:text-primary-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("nav.blog")}
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    to="/search"
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-lg font-semibold transition-all ${
                      isActive("/search")
                        ? "bg-secondary/15 text-primary-foreground border-l-4 border-secondary"
                        : "text-primary-foreground/90 hover:bg-primary-foreground/5 hover:text-primary-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <Search className="w-5 h-5" />
                      {t("nav.searchJobs")}
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                </motion.div>
              </div>

              {/* Contact info in mobile menu */}
              <div className="my-4 border-t border-primary-foreground/10" />
              <div className="flex flex-col sm:flex-row gap-3 px-4">
                <a
                  href="tel:4169481058"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  416-948-1058
                </a>
                <a
                  href="mailto:Info@atspro.ca"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  Info@atspro.ca
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};