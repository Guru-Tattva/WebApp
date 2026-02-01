// PostCSS config (Vite also uses css.postcss in vite.config.ts).
// If you see "A PostCSS plugin did not pass the `from` option to postcss.parse",
// it is a known upstream warning from tailwindcss/autoprefixer and can be safely ignored;
// CSS transformation still works correctly.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
