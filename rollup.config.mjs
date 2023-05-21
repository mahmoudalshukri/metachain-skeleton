import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "public/bundle.js",
        format: "iife",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        extensions: [".js", "jsx"],
      }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
      replace({
        preventAssignment: false,
        "process.env.NODE_ENV": '"development"',
      }),
      postcss(),
    ],
  },
];
