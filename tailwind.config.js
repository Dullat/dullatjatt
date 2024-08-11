/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blackRadient: "radial-gradient(circle, #1A1A1A 0%, black 50%)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      screens: {
        "2xl": { max: "1535px" },

        xl: { max: "1200px" },

        lg: { max: "1023px" },

        md: { max: "767px" },

        sm: { max: "639px" },

        csm: { max: "550px" },

        xsm: { max: "460px" },
      },
    },
  },
  plugins: [],
}
