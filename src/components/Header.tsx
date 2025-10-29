import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, sans-serif' }}>iBrain</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('courses')}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection('impact')}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            About
          </button>
        </div>

        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
            >
              About
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
