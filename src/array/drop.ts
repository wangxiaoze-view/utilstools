import { AnyType } from "../types";
import { isArray } from "../util/getTypes";

function drop(value: AnyType[], index: number = 1) {
	if (!isArray(value)) return [];
	if (isNaN(index)) index = 1;
	return value.slice(index, value.length);
}

export default drop;
