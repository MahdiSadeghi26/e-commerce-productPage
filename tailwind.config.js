/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'kumbhRgular':["'kumbh-rgular'"],
      'kumbhMedium':["'kumbh-medium'"],
      'kumbhSemiBold':["'kumbh-semiBold'"],
      'kumbhBold':["'kumbh-bold'"],
    },
    colors:{
      'orange':'hsl(26, 100%, 55%)',
      'paleOrange':'hsl(25, 100%, 94%)',
      'veryDarkGrayish':'hsl(220, 13%, 13%)',
      'darkGrayishBlue':'hsl(219, 9%, 45%)',
      'grayishBlue':'hsl(220, 14%, 75%)',
      
    },
    extend: {},
  },
  plugins: [],
}