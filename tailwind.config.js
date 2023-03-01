module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'indigo': '#0E018F',
      'orange': '#FF9900',
      'red': '#FF4162',
      'blue': '#703EFF',
      'darkblue': '#211F48',
      'black': '#000000',
      'gray': '#374151',
      'docblue': '#1E40AF',
      'vestingHeader': '#081F5F'
    }
  },
  variants: {
    extend: {
      animation: ['hover'] 
    },
  },
  plugins: [],
};
