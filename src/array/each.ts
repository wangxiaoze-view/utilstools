import { EachDataType, EachFnType } from "../types";
import arrayEach from "../util/arrayEach";
import { isArray } from "../util/getTypes";
import objectEach from "../util/objectEach";

function each(data: EachDataType, fn: EachFnType) {
	const handler = isArray(data) ? arrayEach : objectEach;
	return handler(data, fn);
}

export default each;
