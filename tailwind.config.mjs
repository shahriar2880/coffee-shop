/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackdark: {
        '50': '#f5f5f6',
        '100': '#e5e5e8',
        '200': '#cfd0d2',
        '300': '#adafb3',
        '400': '#83848d',
        '500': '#686972',
        '600': '#595961',
        '700': '#4c4d52',
        '800': '#434347',
        '900': '#3b3b3e',
        '950': '#1b1b1d',
    },
    shuttlegray: {
        '50': '#f5f5f6',
        '100': '#e6e6e7',
        '200': '#cfcfd2',
        '300': '#aeafb2',
        '400': '#85858b',
        '500': '#64646a',
        '600': '#5a5a60',
        '700': '#4d4d51',
        '800': '#444446',
        '900': '#3c3b3e',
        '950': '#262527',
    },
    
    
      },
    },
    
  },
  plugins: [],
};
