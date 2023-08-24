/**
 *
 * 英文字母首字母大小写
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * toCaseFirst('12312 3') // false
 * ```
 */

import string from "../string";
import { AnyType, StringCase, StringFn } from "../types";
import { isString } from "./getTypes";

function toCaseFirst(type: StringCase): StringFn {
	return (value: string): string => {
		if (!value || !isString(value)) return "";

		return (value.charAt(0)[type as AnyType] as AnyType)() + value.slice(1);
	};
}

export default toCaseFirst;
