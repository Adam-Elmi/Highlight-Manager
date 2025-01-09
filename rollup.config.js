import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/staticHighlight.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyLibrary',
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
