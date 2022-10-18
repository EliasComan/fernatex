/** @type {import('tailwindcss').Config} */
//https://coolors.co/palette/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/daisyui/**/*.js"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
              "primary": "#0077B6",
                      
              "secondary": "#0096C7",
                      
              "accent": "#03045E",
                      
              "neutral": "#000000",
                      
              "base": "#FFFFFF",
                      
              "info": "#023E8A",
                      
              "success": "#36D399",
                      
              "warning": "#FBBD23",
                      
              "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"),   require('flowbite/plugin')],
}