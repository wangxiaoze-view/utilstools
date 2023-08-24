import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import esbuild from "rollup-plugin-esbuild";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const entries = ["src/index.ts"];

const plugins = [
	babel({
		babelrc: false,
		babelHelpers: "bundled",
		presets: [["env", { modules: false }]],
	}),
	resolve({
		preferBuiltins: true,
	}),
	alias(),
	json(),
	typescript(),
	commonjs(),
	esbuild(),
	uglify(),
];

export default [
	...entries.map(input => ({
		input,
		output: [
			{
				// ES Modules
				file: input.replace("src/", "dist/").replace(".ts", ".mjs"),
				format: "esm",
				name: "wxzUtils",
				sourcemap: false,
			},
			{
				// CommonJS
				file: input.replace("src/", "dist/").replace(".ts", ".cjs"),
				format: "cjs",
				name: "wxzUtils",
				sourcemap: false,
			},
			{
				// 前端和后端通用
				file: input.replace("src/", "dist/").replace(".ts", ".js"),
				format: "umd",
				name: "wxzUtils",
				sourcemap: false,
			},
			{
				// 异步模块定义
				file: input.replace("src/", "dist/").replace(".ts", ".amd.js"),
				format: "amd",
				name: "wxzUtils",
				sourcemap: false,
			},
		],
		external: [],
		plugins,
	})),
	...entries.map(input => ({
		input,
		output: {
			file: input.replace("src/", "").replace(".ts", ".d.ts"),
			format: "esm",
		},
		external: [],
		plugins: [dts({ respectExternal: true })],
	})),
];
