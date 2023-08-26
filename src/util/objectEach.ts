import { AnyType, EachFnObject } from "../types/index.js";
import { obj_pro_toString } from "./getTypes.js";
function objectEach(data: AnyType, fn: EachFnObject) {
	const type = obj_pro_toString.call(fn);

	if (["[object Null]", "[object Null]"].includes(type)) return data;

	if (type === "[object Function]") {
		for (const [key, value] of Object.entries(data)) {
			fn(key, value, data);
		}
	}
}

export default objectEach;
