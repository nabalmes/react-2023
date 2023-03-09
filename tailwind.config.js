/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'sm': '640px',

        //About page custom tw 
        'about-grid': 'repeat(3, 1fr)',

        //work page custom tw 
        'work-grid-sm': 'repeat(auto-fit, minmax(400px, 1fr))',
        'work-grid': 'repeat(auto-fit, minmax(256px, 1fr))',


      },
      colors: {
        'light': 'hsla(0,0%,87%,1)',
        'dark': 'hsla(0,0%,13%,1)',

        'nav-light': 'hsla(0, 0%, 13%, .75)',
        'nav-dark': 'hsla(0, 0%, 87%, .75)',

        'card-bg-dark': 'hsla(0, 0%, 16%, .50)',
        'card-bg-light': 'hsla(0, 0%, 100%, .50);',


        'work-hover': '0px 5px 5px -3px rgba(0, 0, 0, .1), 0px 8px 8px 1px rgba(0, 0, 0, .07), 0px 3px 8px 2px rgba(0, 0, 0, .08), 0px 0px 0px 2px white',
      },
      backgroundImage: {
        'light-image': "radial-gradient(at 24% 90%, hsl(66deg 21% 20% / 42%) 0px, transparent 50%), radial-gradient(at 70% 99%, hsl(175deg 76% 20% / 49%) 0px, transparent 50%)",
        'dark-image': "radial-gradient(at 24% 90%, hsl(66deg 21% 20% / 75%) 0px, transparent 50%), radial-gradient(at 70% 99%, rgb(1, 82, 75) 0px, transparent 50%)",
      },
      boxShadow: {
        'work-hover-light': '0px 5px 5px -3px rgba(0, 0, 0, .1), 0px 8px 8px 1px rgba(0, 0, 0, .07), 0px 3px 8px 2px rgba(0, 0, 0, .08), 0px 0px 0px 2px #06b6d4',
        'work-hover-dark': '0px 5px 5px -3px rgba(0, 1, 1, .1), 0px 8px 8px 1px rgba(0, 0, 0, .07), 0px 3px 8px 2px rgba(0, 0, 0, .08), 0px 0px 0px 2px rgb(55 65 81 / 1)',
      },
    },
  },
  plugins: [],
}
