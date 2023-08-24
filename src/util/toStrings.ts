/**
 *
 * 数字转字符串
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * toString(123123) //
 * toString([1, 2, 3]) //
 * ```
 */

import { isSymbol, sym_pro_toString } from "./getTypes.js";

function toStrings(value: string | any[]): string {
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value.map(toStrings).join();
	if (isSymbol(value)) return sym_pro_toString.call(value) || "";
	const result = `${value}`;
	return result === "Infinity" ? "0" : result;
}

export default toStrings;
