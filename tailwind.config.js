export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 25s linear infinite",
        'fade-in-up': 'fade-in-up 1.5s ease-out both',
        'bounce-in': 'bounceIn 0.5s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite',
        'fade-text-in': 'fadeTextIn 0.5s ease-out forwards',
        'fade-text-out': 'fadeTextOut 0.5s ease-in forwards',
        'drop-in': 'drop-in 0.6s ease forwards',
        'pop-bounce': 'pop-bounce 0.3s ease-in-out', // ✅ already included
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounceIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9) translateY(-30%)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.05) translateY(5%)',
          },
          '100%': {
            transform: 'scale(1) translateY(0)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 4px rgba(255,255,255,0.15)',
          },
          '50%': {
            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
          },
        },
        fadeTextIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeTextOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'drop-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pop-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
