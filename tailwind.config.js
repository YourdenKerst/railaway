/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-container': '#7744cb',
        'on-primary': '#ffffff',
        primary: '#5e27b1',
        secondary: '#5f5e5e',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#4a4453',
        'outline-variant': '#ccc3d5',
        outline: '#7b7484',
        surface: '#f9f9f9',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'surface-container-lowest': '#ffffff',
        'surface-dim': '#dadada',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        headline: ['Bebas Neue', 'sans-serif'],
        label: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

