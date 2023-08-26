import regular from "../regular";
import trim from "./trim";
import capitalized from "./capitalized";
import toLowerCase from "./lowercase";
import isWith from "./isWith";
import { isString } from "../util/getTypes";
import { IStringFuns } from "../types";
import baseParseInt from "./baseParseInt";

/**
 *
 * 给字符串开头填充字符
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * padStart('asdasd', 10, ' _ ')
 * ```
 */
const padStart = (
	value: string,
	length: number,
	char?: string | undefined
): string => {
	if (!isString(value)) return value;
	if (!regular.isNumber(length.toString())) return value;
	return value.padStart(length, char);
};

/**
 *
 * 给字符串末尾填充字符
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * padEnd('asdasd', 10, ' _ ')
 * ```
 */
const padEnd = (value: string, length: number, char?: string | undefined) => {
	if (!isString(value)) return value;
	if (!regular.isNumber(length.toString())) return value;
	return value.padEnd(length, char);
};




/**
 *
 * 将字符串转换成浮点数
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * baseParseFloat('asdasd', 10, ' _ ')
 * ```
 */
const baseParseFloat = (value: string): number => parseFloat(value)


/**
 *
 * 重复x次字符串
 * @version 1.0.0
 * @category Public
 * @param value 重复的字符串
 * @param count 重复的次数
 * @example
 *
 * ``` typescript
 * repeatString('a', 10)
 * ```
 */
const repeatString = (value: string, count: number = 0) => {
	if (!isString(value)) return '';
	return String.prototype.repeat.call(value, count)
}



/**
 *
 * 替换字符串
 * @version 1.0.0
 * @category Public
 * @param value 字符串
 * @param search 查询替换的字符或者正则
 * @param replaceString 替换的字符
 * @example
 *
 * ``` typescript
 * replaceString('abc', 'a', '1111')
 * ```
 */
const replaceString = (value: string, search: string | RegExp, replaceString: string): string => value.replace(search, replaceString)



/**
 *
 * 字符串拆分
 * @version 1.0.0
 * @category Public
 * @param value 字符串
 * @param splitter 拆分的字符
 * @param limit 限制拆分的数量
 * @example
 *
 * ``` typescript
 * splitString('a_b_c', '_',  1)
 * ```
 */
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
