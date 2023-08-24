/**
 *
 * 首字母大写，剩余字母小写
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * capitalized('asdasd')
 * ```
 */

import toStrings from "../util/toStrings";
import toUpperFirst from "../util/toCaseFirst";

function capitalized(value: string) {
	return toUpperFirst("toUpperCase")(toStrings(value));
}

export default capitalized;
