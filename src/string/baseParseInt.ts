/**
 *
 * 将字符串转换成指定基数的整数
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * baseParseInt('1231', 10)
 * ```
 */

import { isString } from "../util/getTypes";


function baseParseInt(value: string, radix?: number | undefined): number {
	if ( radix === undefined || isNaN(radix)) {
		radix = 10;
	} else {
		radix = +radix
	}
	return parseInt(value)
}

export default baseParseInt;