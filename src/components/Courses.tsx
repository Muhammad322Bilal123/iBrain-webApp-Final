import { BookOpen, Brain, Code, Palette } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Machine Learning Fundamentals',
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Advanced Web Development',
    icon: Code,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Creative Design Systems',
    icon: Palette,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Data Science Essentials',
    icon: BookOpen,
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Discover AI-powered courses designed to accelerate your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <course.icon className="w-16 h-16 mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-semibold text-center group-hover:scale-105 transition-transform duration-500">
                  {course.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
