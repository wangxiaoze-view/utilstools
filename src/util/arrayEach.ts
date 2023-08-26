import { AnyType, EachFnArray } from "../types/index.js";
import { obj_pro_toString } from "./getTypes.js";
function arrayEach(data: AnyType[], fn: EachFnArray) {
	const type = obj_pro_toString.call(fn);
	let index = -1;
	if (type === "[object Function]") {
		while (++index < data.length) {
			fn(data[index], index, data);
		}
	}
}

export default arrayEach;
