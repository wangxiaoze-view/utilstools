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
