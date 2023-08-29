import { AnyType } from "../types";
import { isArray } from "../util/getTypes";

function diffFilter(value: AnyType[], diffVal: AnyType[]) {
	if (!isArray(value)) return [];
	if (!isArray(diffVal)) return value;
	return value.filter(item => diffVal.indexOf(item) === -1);
}

export default diffFilter;
