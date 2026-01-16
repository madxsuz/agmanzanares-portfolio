
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 glass border-b border-forest/10 dark:border-forest/20 shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo Left */}
        <button 
          onClick={scrollToTop}
          className="text-2xl font-serif font-bold text-gold hover:text-gold transition-transform hover:scale-105 z-10 dark:text-cream"
        >
          AM.
        </button>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-gold dark:hover:text-peach transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle Right */}
        <div className="flex items-center space-x-4 z-10">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-forest/5 dark:hover:bg-cream/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-gold" /> : <Moon size={18} className="text-forest" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-forest dark:text-cream">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 border-b border-forest/10 dark:border-forest/20 py-6 px-6 flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-forest dark:text-cream hover:text-gold"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
