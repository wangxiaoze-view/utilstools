/**
 *
 * 数组底层循环
 * @version 1.0.0
 * @category Public
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * arrayEach([1, 2, 3], (item, index, arr) => {})
 * ```
 */
import { EachFnArray } from "../types/index.js";
import { obj_pro_toString } from "./getTypes.js";
function arrayEach<T = any>(data: T[], fn: EachFnArray) {
	const type = obj_pro_toString.call(fn);
	let index = -1;
	if (type === "[object Function]") {
		while (++index < data.length) {
			fn(data[index], index, data);
		}
	}
}

export default arrayEach;
