import regular from "../regular";
import trim from "./trim";
import capitalized from "./capitalized";
import toLowerCase from "./lowercase";
import isWith from "./isWith";
import { isString } from "../util/getTypes";
import { IStringFuns } from "../types";
import baseParseInt from "./baseParseInt";

const padStart = (
	value: string,
	length: number,
	char?: string | undefined
): string => {
	if (!isString(value)) return value;
	if (!regular.isNumber(length.toString())) return value;
	return value.padStart(length, char);
};


const padEnd = (value: string, length: number, char?: string | undefined) => {
	if (!isString(value)) return value;
	if (!regular.isNumber(length.toString())) return value;
	return value.padEnd(length, char);
};

const baseParseFloat = (value: string): number => parseFloat(value)

const repeatString = (value: string, count: number = 0) => {
	if (!isString(value)) return '';
	return String.prototype.repeat.call(value, count)
}

const replaceString = (value: string, search: string | RegExp, replaceString: string): string => value.replace(search, replaceString)

const splitString = (value: string, splitter: string | RegExp, limit?: number | undefined) => {
	if (limit === undefined) limit = 0
	return value.split(splitter, limit);
}

export default {
	trim,
	capitalized,
	toLowerCase,
	isWith,
	padStart,
	padEnd,
	baseParseInt,
	baseParseFloat,
	repeatString,
	replaceString,
	splitString
} as IStringFuns;
