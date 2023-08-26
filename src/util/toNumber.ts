import { isSymbol } from "./getTypes";

function toNumber(value: string | number): number {
	if (typeof value === "number") return value;
	if (isSymbol(value)) return NaN;
	return +value;
}

export default toNumber;
