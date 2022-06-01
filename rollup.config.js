import { terser } from "rollup-plugin-terser";

export default {
  input: {
    class: "./src/class-entry.js",
    module: "./src/module-entry.js",
  },
  output: {
    dir: "rollup-build",
    format: "esm",
  },
  plugins: [terser()],
};
