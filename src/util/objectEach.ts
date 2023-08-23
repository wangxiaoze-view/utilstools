/**
 *
 * 对象底层循环
 * @version 1.0.0
 * @category Public
 * @param value 传递的对象
 * @example
 *
 * ``` typescript
 * objectEach({a: 1, b: 2}, (key, value, obj) => {})
 * ```
 */
import { EachFnObject } from "../types/index.js";
import { obj_pro_toString } from "./getTypes.js";
function objectEach(data: any, fn: EachFnObject) {
	const type = obj_pro_toString.call(fn);

	if (["[object Null]", "[object Null]"].includes(type)) return data;

	if (type === "[object Function]") {
		for (const [key, value] of Object.entries(data)) {
			fn(key, value, data);
		}
	}
}

export default objectEach;
