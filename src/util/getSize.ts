/**
 *
 * 获取字符串，数组的长度
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * getSize('123123')
 * getSize('469025202308245159')
 * ```
 */

import { AnyType } from "../types/index.js";
import { obj_pro_toString } from "./getTypes.js";

function getSize(data: string | AnyType[]): number | undefined {
	if (
		["[object Array]", "[object String]"].includes(obj_pro_toString.call(data))
	) {
		return data.length;
	}
	return undefined;
}
export default getSize;
