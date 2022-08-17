import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: {
    res: "./src/module.js",
  },
  output: {
    dir: "rollup-build",
    format: "esm",
    entryFileNames: "[name]-rollup.js",
  },
  plugins: [resolve(), commonjs(), terser()],
};
