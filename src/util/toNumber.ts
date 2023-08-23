/**
 *
 * 字符串转数字
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * toNumber('123123') //
 * toNumber('469025202308245159') //
 * ```
 */

import { isSymbol } from "./getTypes";

function toNumber(value: string | number): number {
	if (typeof value === "number") return value;
	if (isSymbol(value)) return NaN;
	return +value;
}

export default toNumber;
