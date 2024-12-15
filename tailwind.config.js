/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'header': "url('/src/assests/images/sofa_with_painting.jpg')",
        'footer': "url('/src/assests/images/fireplace.jpg')",
      },
      colors: {
        background: '#1C1C1C',
        textPrimary: '#FFFFFF',
        textSecondary: '#AFAFAF',
        accent: '#D4A26A',
        cardBackground: '#2E2E2E',
        buttonBackground: '#000000',
      },
    },
  },
  plugins: [],
}

