import { Cpu, Mic, User, Sparkles, Layers, Zap } from 'lucide-react';

const technologies = [
  { name: 'LLM', icon: Cpu, description: 'Advanced Language Models' },
  { name: 'TTS', icon: Mic, description: 'Text-to-Speech Engine' },
  { name: 'Avatar', icon: User, description: 'AI Avatars' },
  { name: 'Canvas', icon: Layers, description: 'Interactive Canvas' },
  { name: 'React', icon: Zap, description: 'Modern UI Framework' },
  { name: 'AI', icon: Sparkles, description: 'Machine Intelligence' },
];

export default function Impact() {
  return (
    <section id="impact" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Powered by Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering students worldwide with AI-driven learning.
            Built with cutting-edge technology to deliver personalized education at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <tech.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-sm text-gray-600 font-light">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full">
            <p className="text-lg font-medium">
              Join thousands of learners transforming their future with AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
