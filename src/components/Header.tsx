import { useState } from 'react';
import { X } from 'lucide-react';

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="18" y2="12" />
    <line x1="3" y1="6" x2="18" y2="6" />
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50">
        <nav className="max-w-fit mx-auto">
          <div className="bg-white/80 backdrop-blur-xl shadow-all-sides-shadow rounded-full transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center px-5 py-3">
              <span 
                className="text-2xl font-bold text-gray-900 cursor-pointer"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                onClick={() => scrollToSection('home')}
              >
                iBrain
              </span>
              <div className="h-6 w-px bg-gray-300 mx-4"></div>
              <button
                className="text-gray-900 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-1000 ease-in-out ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
      >
        <div className="pt-40 px-16">
          <div className="flex flex-col items-start space-y-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xl text-gray-800 hover:text-black transition-all duration-700 ease-in-out ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '400ms' : '500ms' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className={`text-xl text-gray-800 hover:text-black transition-all duration-700 ease-in-out ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '500ms' : '400ms' }}
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className={`text-xl text-gray-800 hover:text-black transition-all duration-700 ease-in-out ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '600ms' : '300ms' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={`text-xl text-gray-800 hover:text-black transition-all duration-700 ease-in-out ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '700ms' : '200ms' }}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`text-xl text-gray-800 hover:text-black transition-all duration-700 ease-in-out ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '800ms' : '100ms' }}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-xl text-gray-800 hover:text-black transition-all duration-700 ease-in-out ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '900ms' : '0ms' }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
