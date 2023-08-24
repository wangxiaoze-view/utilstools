import regular from "../regular";
import trim from "./trim";
import capitalized from "./capitalized";
import toLowerCase from "./lowercase";
import isWith from "./isWith";
import { isString } from "../util/getTypes";
import { IStringFuns } from "../types";

/**
 *
 * 给字符串开头填充字符
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * padStart('asdasd', 10, ' _ ')
 * ```
 */
const padStart = (
	value: string,
	length: number,
	char?: string | undefined
): string => {
	if (!isString(value)) return value;
	if (!regular.isNumber(length.toString())) return value;
	return value.padStart(length, char);
};

/**
 *
 * 给字符串末尾填充字符
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * padEnd('asdasd', 10, ' _ ')
 * ```
 */
const padEnd = (value: string, length: number, char?: string | undefined) => {
	if (!isString(value)) return value;
	if (!regular.isNumber(length.toString())) return value;
	return value.padEnd(length, char);
};

export default {
	trim,
	capitalized,
	toLowerCase,
	isWith,
	padStart,
	padEnd,
} as IStringFuns;
