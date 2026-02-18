import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Menu', id: 'menu' },
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reservations', id: 'reservations' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/generated/royal-flame-logo.dim_512x512.png"
              alt="Royal Flame"
              className="h-12 w-12 object-contain"
            />
            <span className="font-serif text-2xl font-semibold text-foreground">
              Royal Flame
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('reservations')}
              className="px-6 py-2.5 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium shadow-sm"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium text-left px-4 py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('reservations')}
                className="mx-4 px-6 py-2.5 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium shadow-sm"
              >
                Reserve Table
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
