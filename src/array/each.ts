/**
 *
 * 数组对象循环
 * @version 1.0.0
 * @category Public
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * each([1, 2, 3]) // true
 * each('469025202308245159') // false
 * ```
 */

import { EachDataType, EachFnType } from "../types";
import arrayEach from "../util/arrayEach";
import { isArray } from "../util/getTypes";
import objectEach from "../util/objectEach";

function each(data: EachDataType, fn: EachFnType) {
	const handler = isArray(data) ? arrayEach : objectEach;
	return handler(data, fn);
}

export default each;