/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.jsx", "./node_modules/tw-elements/dist/js/**/*.js","./node_modules/flowbite/**/*.js",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // Configure your color palette here
      'primary1':'#009A96',
      'primary2':'#1A716F',
      'primary3':'#80CDCB',
      'primary4':'#E6F5F5',
      'secondary1':'#5E84BC',
      'secondary2':'#3361A4',
      'secondary3':'#04488E',
      'contrast':'#FFB12B',
      'soft':'#F5F5F5',
      'white': '#ffffff',
      'contrast1':{
        50:"#ffe0aa",
        100:"#ffd895",
        200:"#ffd080",
        300:"#ffc86b",
        400:"#ffc155",
        500:"#ffb940",
        600:"#e69f27",
        700:"#cc8e22",
        800:"#b37c1e",
        900:"#996a1a",
      },
      'gray': {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712"
    },
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
    },
      maxWidth: {
        '100r': '100rem',
      },
      height: {
        '45r': '45rem',
        '35r': '35rem',
        '30r': '30rem',
      },
      width: {
        '45r': '45rem',
        '35r': '35rem',
        '30r': '30rem',
      },
      dropShadow: {
        '3xl': '0 5px 5px -10px rgba(0, 0, 0, 0.3)',
        '5xl': "--tw-shadow: 20px 20px 15px -12px rgb(0 0 0 / 0.25); --tw-shadow-colored: 10px 20px 15px -12px var(--tw-shadow-color);        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);",
      },
      lineHeight: {
        'loose-xl': '3rem',
        'loose-2xl': '3.2rem',
        'loose-3xl': '3.5rem',
      },
      inset:{
        '5per':'5%',
        '10per':'10%',
        '15per':'15%',
        '20per':'20%',
        '30per':'30%',
        '40per':'40%',
        '60per':'60%',
        '70per':'70%',
        '80per':'80%',
        '90per':'90%',
      },
    },
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs"), require('@tailwindcss/forms'),require('flowbite/plugin'),require('@headlessui/tailwindcss')],
}