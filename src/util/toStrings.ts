import { isSymbol, sym_pro_toString } from "./getTypes.js";

function toStrings(value: string | any[]): string {
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value.map(toStrings).join();
	if (isSymbol(value)) return sym_pro_toString.call(value) || "";
	const result = `${value}`;
	return result === "Infinity" ? "0" : result;
}

export default toStrings;
