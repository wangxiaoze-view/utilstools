import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import esbuild from "rollup-plugin-esbuild";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";

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
];

export default [
	...entries.map(input => ({
		input,
		output: [
			{
				// ES Modules
				file: input.replace("src/", "dist/").replace(".ts", ".mjs"),
				format: "esm",
				name: "webUtils",
				sourcemap: true,
			},
			{
				// CommonJS
				file: input.replace("src/", "dist/").replace(".ts", ".cjs"),
				format: "cjs",
				name: "webUtils",
				sourcemap: true,
			},
			{
				// 前端和后端通用
				file: input.replace("src/", "dist/").replace(".ts", ".umd.js"),
				format: "umd",
				name: "webUtils",
				sourcemap: true,
			},
			{
				// 异步模块定义
				file: input.replace("src/", "dist/").replace(".ts", ".amd.js"),
				format: "amd",
				name: "webUtils",
				sourcemap: true,
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
