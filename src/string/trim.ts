/**
 *
 * 过滤空白，换行字符
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * trim('12312 3') // false
 * ```
 */

import { isString } from "../util/getTypes";

function trim(value: string): string {
	if (isString(value)) {
		value.replace(/\s|\r|\t|\n/g, "");
	}
	return "";
}

export default trim;
