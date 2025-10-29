import { useState, useEffect, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(props: any) {
  const { scene } = useGLTF('./ai-avatar.glb');
  return <primitive object={scene} {...props} />;
}

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
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">
            Learn with
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Empowering the next generation with personalized, AI-driven education.
            Create courses in seconds, learn at your own pace.
          </p>

          <div className="flex justify-center mt-20">
            <div className="relative group inline-block">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300 animate-glow"></div>
              <button className="relative group inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300">
                <span>Create Course</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mt-40 md:mt-28 transition-all duration-1000 delay-300 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl overflow-hidden">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Model />
                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
