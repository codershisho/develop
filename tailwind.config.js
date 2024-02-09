/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // JIT(Just-in-Time)モード有効
  prefix: 'tw-', // `tw-`を追加
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
