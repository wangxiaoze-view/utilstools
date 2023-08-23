/**
 *
 * 是否为数组格式
 * @version 1.0.0
 * @category Public
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * isArray([1, 2, 3]) // true
 * isArray('469025202308245159') // false
 * ```
 */
import { obj_pro_toString } from "./getTypes";

function isArray(value: any): boolean {
	return obj_pro_toString.call(value) === "[object Array]";
}

export default isArray;
