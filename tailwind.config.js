/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        glow: 'glow 4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px 5px rgba(99, 102, 241, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 30px 10px rgba(168, 85, 247, 0.5)',
          },
        },
      },
      boxShadow: {
        'all-sides-shadow': '0 0 20px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
