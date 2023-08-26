import { AnyType } from "../types";

export const obj_pro_toString = Object.prototype.toString;
export const sym_pro_toString = Symbol.prototype.toString;

export function isArray(value: AnyType) {
	return obj_pro_toString.call(value) === "[object Array]";
}

export function isSymbol(value: Symbol | string) {
	return (
		typeof value === "symbol" ||
		(value !== null && obj_pro_toString.call(value) === "[object Symbol]")
	);
}

export function isString(value: string) {
	return obj_pro_toString.call(value) === "[object String]";
}
