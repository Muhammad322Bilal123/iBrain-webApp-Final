import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-40 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            Learn with
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Empowering the next generation with personalized, AI-driven education.
            Create courses in seconds, learn at your own pace.
          </p>

          <button className="group inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span>Create Course</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div
          className={`mt-20 transition-all duration-1000 delay-300 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl"></div>
                </div>
                <p className="text-sm font-medium">AI Avatar Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
