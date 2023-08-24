/**
 *
 * 检测字符串是否以指定的字符串存在；可支持索引指定；
 * 例如：
 * 1.字符串'abcdefg'是否存在'h' 没有索引固定的情况；isWith('abcdefg', 'h') 返回false, 字符串abcdefg不存在h
 * 2.字符串'abcdefg'是否存在'h' 有所以固定的情况；isWith('abcdefg', 'h', 3) 返回false, 字符串abcdefg索引为3('d'), d 与 h 不相符
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isWith('asdasd', 'd', 0) // true
 * isWith('asdasd', 'd', 1) // false
 * ```
 */

import regular from "../regular";
import { isString } from "../util/getTypes";

function isWith(value: string, char: string, index = 0): boolean {
	if (!value || !isString(value) || index < 0) return false;

	if (!regular.isNumber(value)) {
		return value.indexOf(char) !== -1;
	}

	return value.indexOf(char) == index;
}

export default isWith;
