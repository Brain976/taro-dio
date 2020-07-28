const pkg = require("./package.json");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const sourceMaps = require("rollup-plugin-sourcemaps");

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, name: "dio", format: "umd", sourcemap: true },
    { file: pkg.module, format: "es", sourcemap: true },
  ],
  watch: {
    include: "src/**",
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
};
