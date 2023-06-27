import commonjs from '@rollup/plugin-commonjs'
import {babel} from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import externals from "rollup-plugin-node-externals";
import strip from "@rollup/plugin-strip";

const isDev = process.env.NODE_ENV === 'development';

export default {
    input: 'src/index.js',
    output: [
        {
            format: 'es',
            file: isDev ? 'npm/es/index.js': 'npm/es/index.min.js',
            name: 'webUtils',
            sourcemap: true,
        },
        {
            format: 'amd',
            name: 'webUtils',
            file: isDev ? 'npm/amd/index.js': 'npm/amd/index.min.js',
            sourcemap: true,
        },
        {
            format: 'cjs',
            name: 'webUtils',
            file: isDev ? 'npm/cjs/index.js': 'npm/cjs/index.min.js',
            sourcemap: true,
        },
        {
            format: 'umd',
            name: 'webUtils',
            file: isDev ? 'npm/umd/index.js': 'npm/umd/index.min.js',
            sourcemap: true,
        }
    ],
    plugins: [
        externals({
            devDeps: false,
        }),
        nodeResolve(),
        commonjs(),
        babel(),
        strip(),
    ],
    external: []
}
