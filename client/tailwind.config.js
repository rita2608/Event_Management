/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors:{
            'background': '#fafafa',
            'primary': '#6a329f',
            'secondary': '#D1D5D8',
            'primarydark': '#4f1685',
            'primarylight':'#b4a7d6',
         }

      },
   },
   plugins: [],
};
