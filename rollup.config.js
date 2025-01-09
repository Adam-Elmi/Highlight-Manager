import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/staticHighlight.js', // Your entry JS file
  output: {
    file: 'dist/bundle.js',         // Output bundle
    format: 'iife',                 // IIFE format for browser compatibility
    name: 'MyLibrary',
  },
  plugins: [
    resolve(),
    commonjs(),
    css({ output: 'dist/styles.css' }) // Extract CSS to a separate file
  ]
};
