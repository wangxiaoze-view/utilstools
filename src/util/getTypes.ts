import { AnyType } from "../types";

export const obj_pro_toString = Object.prototype.toString;
export const sym_pro_toString = Symbol.prototype.toString;

/**
 *
 * 是否为数组格式
 * @version 1.0.0
 * @category Public
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * isArray([1, 2, 3])
 * isArray('469025202308245159')
 * ```
 */
export function isArray(value: AnyType) {
	return obj_pro_toString.call(value) === "[object Array]";
}

/**
 *
 * 是否为Symbol对象
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * isSymbol('123123')
 * isSymbol('469025202308245159')
 * ```
 */
export function isSymbol(value: Symbol | string) {
	return (
		typeof value === "symbol" ||
		(value !== null && obj_pro_toString.call(value) === "[object Symbol]")
	);
}
