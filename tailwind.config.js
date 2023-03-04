/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'sm': '640px',

        'work-grid-sm': 'repeat(auto-fit, minmax(400px, 1fr))',
        'work-grid': 'repeat(auto-fit, minmax(256px, 1fr))',

        
      },
      colors: {
        'light': 'hsla(0,0%,87%,1)',
        'dark': 'hsla(0,0%,13%,1)',

        'nav-light': 'hsla(0, 0%, 13%, .75)',
        'nav-dark': 'hsla(0, 0%, 87%, .75)',

        'project-bg-dark': 'hsla(0, 0%, 16%, .50)',
        'project-bg-light': 'hsla(0, 0%, 100%, .50);',
      },

      backgroundImage: {
        'light-image': "radial-gradient(at 24% 90%, hsl(66deg 21% 20% / 42%) 0px, transparent 50%), radial-gradient(at 70% 99%, hsl(175deg 76% 20% / 49%) 0px, transparent 50%)",
        'dark-image': "radial-gradient(at 24% 90%, hsl(66deg 21% 20% / 75%) 0px, transparent 50%), radial-gradient(at 70% 99%, rgb(1, 82, 75) 0px, transparent 50%)"
      }

    },
  },
  plugins: [],
}
