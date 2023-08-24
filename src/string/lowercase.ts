/**
 *
 * 首字母小写
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * toLowerCase('Asdasd')
 * ```
 */

import toStrings from "../util/toStrings";
import toUpperFirst from "../util/toCaseFirst";

function toLowerCase(value: string) {
	return toUpperFirst("toLowerCase")(toStrings(value));
}

export default toLowerCase;
