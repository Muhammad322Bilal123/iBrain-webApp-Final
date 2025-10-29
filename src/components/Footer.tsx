import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>iBrain</span>
          </div>

          <div className="text-gray-400 text-sm">
            <p>2025 iBrain. Built with intelligence and care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
