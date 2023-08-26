import { AnyType, StringCase, StringFn } from "../types";
import { isString } from "./getTypes";

function toCaseFirst(type: StringCase): StringFn {
	return (value: string): string => {
		if (!value || !isString(value)) return "";

		return (value.charAt(0)[type as AnyType] as AnyType)() + value.slice(1);
	};
}

export default toCaseFirst;
