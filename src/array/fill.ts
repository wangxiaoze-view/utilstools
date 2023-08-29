import { isArray } from "../util/getTypes";

function fill(
	value: never,
	char?: never,
	start?: number | undefined,
	end?: number | undefined
) {
	if (!isArray(value)) return [];
	return Array.prototype.fill.call(value, char, start, end);
}
export default fill;
