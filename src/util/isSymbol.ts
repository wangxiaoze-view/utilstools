/**
 *
 * 是否为Symbol对象
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

import { obj_pro_toString } from "./getTypes";

function isSymbol(value: Symbol | string) {
	return (
		typeof value === "symbol" ||
		(value !== null && obj_pro_toString.call(value) === "[object Symbol]")
	);
}

export default isSymbol;
