import { version, author, description } from "../package.json";

import regular from "./regular/index";
import utils from "./util";
import array from "./array";
import string from "./string";
import { UtilsFuncs } from "./types";

// 没有什么特殊意义，仅仅是记录当前工具库的版本， 作者，描述等等；
const __VERSION__ = version;
const __AUTHOR__ = author;
const __DESC__ = description;

// ======================================================正则======================================================
/**
 *
 * 手机号校验，最宽松模式, 没有按照国家准展示; 只是数字展示11位
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isPhoneLoosest('+8613411111111') // true
 * isPhoneLoosest('13411111111') // true
 * ```
 */
const isPhoneLoosest = regular.isPhoneLoosest;

/**
 *
 * 手机号校验，严谨模式 严格按照国家标准展示 如：13xxxx, 14xxxx, 15xxxx, 16xxxxx, 17xxxx, 18xxxx, 19xxxx;
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isPhone('+8612000000000') // false
 * isPhone('13111111111') // true
 * ```
 */
const isPhone = regular.isPhone;

/**
 *
 * 电子邮箱校验
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isEmail('123123') // false
 * isEmail('131111@qq.com') // true
 * ```
 */
const isEmail = regular.isEmail;

/**
 *
 * 是否为座机
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isLandline('123123') // false
 * isLandline('400-88888888') // true
 * ```
 */
const isLandline = regular.isLandline;

/**
 *
 * 是否为身份证; 身份证号, 支持1/2代(15位/18位数字)
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isCard('123123') // false
 * isCard('469025202308245159') // true  这里的号码是错误的
 * ```
 */
const isCard = regular.isCard;

/**
 *
 * 是否为中文、汉字
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isChinese('123123') // false
 * isChinese('你好啊开发者') // true
 * ```
 */
const isChinese = regular.isChinese;

/**
 *
 * 是否是纯数字
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isNumber('1.22') // false
 * isNumber('122') // true
 * ```
 */
const isNumber = regular.isNumber;

/**
 *
 * html标签(宽松匹配)
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isHtmlTag('<html') // false
 * isHtmlTag('<html>') // true
 * ```
 */
const isHtmlTag = regular.isHtmlTag;

/**
 *
 * 数字和字母组成
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isCharAndNum('<html') // false
 * isCharAndNum('W123') // true
 * ```
 */
const isCharAndNum = regular.isCharAndNum;

/**
 *
 * 小写英文字母
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isLoChar('WW') // false
 * isLoChar('ww') // true
 * ```
 */
const isLoChar = regular.isLoChar;

/**
 *
 * 大写英文字母
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isUpChar('ww') // false
 * isUpChar('ww') // true
 * ```
 */
const isUpChar = regular.isUpChar;

/**
 *
 * 正整数，不包含0
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isPositiveInt('0123') // false
 * isPositiveInt('1230') // true
 * ```
 */
const isPositiveInt = regular.isPositiveInt;

/**
 *
 * 负整数，不包含0
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isNegativeInt('-01230') // false
 * isNegativeInt('-1230') // true
 * ```
 */
const isNegativeInt = regular.isNegativeInt;

/**
 *
 * 浮点数
 * @version 1.0.0
 * @category 常用正则
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isFloor('-01230') // false
 * isFloor('12.00') // true
 * ```
 */
const isFloor = regular.isFloor;

// ======================================================基础工具======================================================

/**
 *
 * 是否为Symbol对象
 * @version 1.0.0
 * @category Utils工具
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * isSymbol('123123')
 * isSymbol('469025202308245159')
 * ```
 */
const isSymbol = utils.isSymbol;

/**
 *
 * 是否为数组格式
 * @version 1.0.0
 * @category Utils工具
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * isArray([1, 2, 3])
 * isArray('469025202308245159')
 * ```
 */
const isArray = utils.isArray;

/**
 *
 * 是否为字符串
 * @version 1.0.0
 * @category Utils工具
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * isString('123123')
 * ```
 */
const isString = utils.isString;
/**
 *
 * 字符串转数字
 * @version 1.0.0
 * @category Utils工具
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * toNumber('123123') //
 * toNumber('469025202308245159') //
 * ```
 */
const toNumber = utils.toNumber;
/**
 *
 * 数字转字符串
 * @version 1.0.0
 * @category Utils工具
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * toString(123123) //
 * toString([1, 2, 3]) //
 * ```
 */
const toStrings = utils.toStrings;
/**
 *
 * 获取字符串，数组的长度
 * @version 1.0.0
 * @category Utils工具
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * getSize('123123')
 * getSize('469025202308245159')
 * ```
 */
const getSize = utils.getSize;
/**
 *
 * 俩数加减乘除的底层算法
 * @version 1.0.0
 * @category Utils工具
 * @param fn 传递的方法  defaultValue
 * @example
 *
 * ``` typescript
 * computedMath((a, b) => a + b, 0)
 * computedMath((a, b) => a - b, 0)
 * ```
 */
const computedMath = utils.computedMath;
/**
 * 循环数组, 当然会接收一个循环的回调函数，该函数会返回对应的 `item, index array`， 循环的每一项数据，当前循环的索引，当前循环的数组;
 * @version 1.0.0
 * @category Utils工具
 * @param value 循环的数组
 * @example
 *
 * ``` typescript
 * arrayEach([1, 2, 3], (item, index, arr) => {
 * 	// item: 当前循环每一项的值， 1， 2， 3
 * 	// index: 对应当前循环的值的索引：0，1，2
 * 	// arr: 返回对应循环的数组：[1, 2, 3]
 * })
 * ```
 */
const arrayEach = utils.arrayEach;
/**
 *
 * 循环对象， 当然会接收一个循环的回调函数，该函数会返回对应的 `key, value, obj`， 循环的key 当前循环的value，当前循环的对象
 * @version 1.0.0
 * @category Utils工具
 * @param value 传递的对象
 * @example
 *
 * ``` typescript
 * objectEach({a: 1, b: 2, c: 3}, (key, value, obj) => {
 * 	// key: 当前循环每一项的key， a， b， c
 * 	// value: 对应当前循环的key对应的数值：1，2，3
 * 	// obj: 返回对应循环的对象：{a: 1, b: 2, c: 3}
 * })
 * ```
 */
const objectEach = utils.objectEach;
/**
 *
 * 英文字母首字母大小写
 * @version 1.0.0
 * @category Utils工具
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * toCaseFirst('toLowerCase')('Asdasd') // asdasd
 * toCaseFirst('toUpperCase')('asdasd') // Asdasd
 * ```
 */
const toCaseFirst = utils.toCaseFirst;

/**
 *
 * 过滤给定对象数据, 可根据对象的形式展示查询给定的值，返回新数组的值；
 * @version 1.0.0
 * @category Utils工具
 * @param data 数组
 * @param callback 查询条件或者回调函数
 * @example
 *
 * ``` typescript
 * // 用法1: 对象{a: 1, b: 2}, 查询的条件{a: 1} ===> 返回的值为对应的数组格式[1]
 * filterObj({a: 1, b: 2}, {a: 1}) // [1]
 * // 用法2： 对象循环
 * filterObj({a: 1, b: 2}, (key, value, obj) => {})
 * ```
 */
const filterObj = utils.filterObj;

/**
 *
 * 过滤给定数组数据, 可根据对象的形式展示查询给定的值，返回新查询的值；
 * @version 1.0.0
 * @category Utils工具
 * @param data 数组
 * @param callback 查询条件或者回调函数
 * @example
 *
 * ``` typescript
 * // 用法1: 数组[{a: 1}, {b: 2}], 查询的条件{a: 1} ===> 返回的值为对应的对象{b: 2}
 * filterObj([{a: 1}, {b: 2}], {b: 2}) // {b: 2}
 * // 用法2： 数组循环
 * filterObj([{a: 1}, {b: 2}], (item, index, array) => {})
 * ```
 */
const filterArr = utils.filterArr;

// 数学
/**
 *
 * 数学算法：俩数字相加,类似于数学算法： a + b = c; 该方法存在计算精度丢失问题;
 * @version 1.0.0
 * @category Math数学
 * @param x 计算的数字x
 * @param y 计算的数字y
 * @returns number
 *
 * ``` typescript
 * add(1, 2) // 3
 * ```
 */
const add = computedMath((x: number, y: number) => x + y, 0);
/**
 *
 * 数学算法：俩数字相减,类似于数学算法： a - b = c;  该方法存在计算精度丢失问题;
 * @version 1.0.0
 * @category Math数学
 * @param x 计算的数字x
 * @param y 计算的数字y
 * @returns number
 *
 * ``` typescript
 * subtract(-1, 2) // -1
 * ```
 */
const subtract = computedMath((a: number, b: number) => a - b, 0);
/**
 *
 * 数学算法：俩数字相乘,类似于数学算法： a * b = c;  该方法存在计算精度丢失问题;
 * @version 1.0.0
 * @category Math数学
 * @param x 计算的数字x
 * @param y 计算的数字y
 * @returns number
 *
 * ``` typescript
 * multi(-1, 3) // -3
 * ```
 */
const multi = computedMath((x: number, y: number) => x * y, 0);
/**
 *
 * 数学算法：俩数字相除,类似于数学算法： a / b = c;  该方法存在计算精度丢失问题;
 * @version 1.0.0
 * @category Math数学
 * @param x 计算的数字x
 * @param y 计算的数字y
 * @returns number
 *
 * ``` typescript
 * division(3, 2) // 1.5
 * ```
 */
const division = computedMath((x: number, y: number) => x / y, 0);

// ======================================================字符串======================================================

/**
 *
 * 过滤空白，换行字符
 * @version 1.0.0
 * @category String字符串
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * trim('12312 3') // false
 * ```
 */

const trim = string.trim;
/**
 *
 * 首字母大写，剩余字母小写
 * @version 1.0.0
 * @category String字符串
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * capitalized('asdasd')
 * ```
 */
const capitalized = string.capitalized;
/**
 *
 * 首字母小写
 * @version 1.0.0
 * @category String字符串
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * toLowerCase('Asdasd')
 * ```
 */
const toLowerCase = string.toLowerCase;
/**
 *
 * 检测字符串是否以指定的字符串存在；可支持索引指定；
 * 例如：
 * 1.字符串'abcdefg'是否存在'h' 没有索引固定的情况；isWith('abcdefg', 'h') 返回false, 字符串abcdefg不存在h
 * 2.字符串'abcdefg'是否存在'h' 有所以固定的情况；isWith('abcdefg', 'h', 3) 返回false, 字符串abcdefg索引为3('d'), d 与 h 不相符
 * @version 1.0.0
 * @category String字符串
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isWith('asdasd', 'd', 0) // true
 * isWith('asdasd', 'd', 1) // false
 * ```
 */
const isWith = string.isWith;
/**
 *
 * 给字符串开头填充字符
 * @version 1.0.0
 * @category String字符串
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * padStart('asdasd', 10, ' _ ')
 * ```
 */
const padStart = string.padStart;
/**
 *
 * 给字符串末尾填充字符
 * @version 1.0.0
 * @category String字符串
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * padEnd('asdasd', 10, ' _ ')
 * ```
 */
const padEnd = string.padEnd;
/**
 *
 * 将字符串转换成指定基数的整数
 * @version 1.0.0
 * @category String字符串
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * baseParseInt('1231', 10)
 * ```
 */
const baseParseInt = string.baseParseInt;
/**
 *
 * 将字符串转换成浮点数
 * @version 1.0.0
 * @category String字符串
 * @param value 需要转换成浮点数的字符串
 * @example
 *
 * ``` typescript
 * baseParseFloat('1234') // 1234
 * ```
 */
const baseParseFloat = string.baseParseFloat;
/**
 *
 * 重复x次字符串， 例如：字符串 a 重复 2次 ==>  aa
 * @version 1.0.0
 * @category String字符串
 * @param value 重复的字符串
 * @param count 重复的次数
 * @example
 *
 * ``` typescript
 * repeatString('a', 10)
 * ```
 */
const repeatString = string.repeatString;
/**
 *
 * 替换字符串
 * @version 1.0.0
 * @category String字符串
 * @param value 字符串
 * @param search 查询替换的字符或者正则
 * @param replaceString 替换的字符
 * @example
 *
 * ``` typescript
 * replaceString('abc', 'a', '1111')
 * ```
 */
const replaceString = string.replaceString;
/**
 *
 * 字符串拆分
 * @version 1.0.0
 * @category String字符串
 * @param value 字符串
 * @param splitter 拆分的字符
 * @param limit 限制拆分的数量
 * @example
 *
 * ``` typescript
 * splitString('a_b_c', '_',  1)
 * ```
 */
const splitString = string.splitString;

// ======================================================数组======================================================

/**
 *
 * 数组对象循环
 * @version 1.0.0
 * @category Array数组
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * each([1, 2, 3]) // true
 * each('469025202308245159') // false
 * ```
 */
const each = array.each;

/**
 *
 * 将数组切分为特定长度的二维数组
 * @version 1.0.0
 * @category Array数组
 * @param value 传递的数组
 * @param chunkNum 二维数组每个数组的长度
 * @example
 *
 * ``` typescript
 * chunks([1, 2, 3], 2) // [[1, 2], [3]]
 * chunks([1, 2, 3, 4, 5], -1) // [[1], [2], [3], [4], [5]]
 * chunks([1, 2, 3, 4, 5], 10) // [[1, 2, 3, 4, 5]]
 * ```
 */
const chunks = array.chunks;

/**
 *
 * 将原有数组创建为一个新的数组，但是数组返回的是真值;
 * @version 1.0.0
 * @category Array数组
 * @param value 传递的数组
 * @param chunkNum 二维数组每个数组的长度
 * @example
 *
 * ``` typescript
 * trueValue([1, 2, 0, false, undefined, null, {}]) // [1, 2]
 * ```
 */
const trueValue = array.trueValue;

/**
 *
 * 数组合并，返回新的数组
 * @version 1.0.0
 * @category Array数组
 * @param value 传递的数组
 * @param args 传递的多个数组
 * @example
 *
 * ``` typescript
 * concat([1, 2], 1, 2, 3) // [1, 2, 1, 2, 3]
 * ```
 */
const concat = array.concat;

/**
 *
 * 给定一组数据，排除给定数组的值；例如：数组A:[1, 2, 3, {a: 1}, false], 我要将数组A排序数组B([{}, 2, true, false])的值;那么
 * 数组A中不该存在数组B的任意值；
 * @version 1.0.0
 * @category Array数组
 * @param value 传递的数组
 * @param diffVal 排除的数组
 * @example
 *
 * ``` typescript
 * const a = [1, 2, 3, {a: 1}, false];
 * const b = [{}, 2, true, false];
 * diffFilter(a, b) // [1, 3, {a: 1}]
 * ```
 */
const diffFilter = array.diffFilter;

/**
 *
 * 根据索引删除数组值，返回一个新创建的数组
 * @version 1.0.0
 * @category Array数组
 * @param value 传递的数组
 * @param index 删除的数组索引，默认为1
 * @example
 *
 * ``` typescript
 * const a = [1, 2, 3, {a: 1}, false];
 * drop(a, 3) // [{a: 1}, false]
 * ```
 */
const drop = array.drop;

/**
 *
 * 根据特定字符，填充数组;
 * @version 1.0.0
 * @category Array数组
 * @param value 传递的数组
 * @param char 填充的字符
 * @param start 填充的开始位置
 * @param end 填充的结束位置
 * @example
 *
 * ``` typescript
 * const a = [1, 2];
 * fill(a, "***",  1, 3) // [1, '***']
 * fill(a, "***") // ['***', '***']
 * ```
 */
const fill = array.fill;

// 对象

const utilstools: UtilsFuncs = {
	// 系统信息
	__VERSION__,
	__AUTHOR__,
	__DESC__,

	// 正则
	isPhoneLoosest,
	isPhone,
	isEmail,
	isLandline,
	isCard,
	isChinese,
	isNumber,
	isHtmlTag,
	isCharAndNum,
	isLoChar,
	isUpChar,
	isPositiveInt,
	isNegativeInt,
	isFloor,

	// 常用工具
	isSymbol,
	isString,
	isArray,
	toNumber,
	toStrings,
	getSize,
	computedMath,
	arrayEach,
	objectEach,
	toCaseFirst,
	filterObj,
	filterArr,

	// 数学
	add,
	subtract,
	multi,
	division,

	// 数组
	each,
	chunks,
	trueValue,
	concat,
	diffFilter,
	drop,
	fill,

	// 字符串
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
	splitString,
};

export {
	// 系统信息
	__VERSION__,
	__AUTHOR__,
	__DESC__,

	// 正则
	isPhoneLoosest,
	isPhone,
	isEmail,
	isLandline,
	isCard,
	isChinese,
	isNumber,
	isHtmlTag,
	isCharAndNum,
	isLoChar,
	isUpChar,
	isPositiveInt,
	isNegativeInt,
	isFloor,

	// 常用工具
	isSymbol,
	isString,
	isArray,
	toNumber,
	toStrings,
	getSize,
	computedMath,
	arrayEach,
	objectEach,
	toCaseFirst,
	filterObj,
	filterArr,

	// 数学
	add,
	subtract,
	multi,
	division,

	// 数组
	each,
	chunks,
	trueValue,
	concat,
	diffFilter,
	drop,
	fill,

	// 字符串
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
	splitString,
};

export default utilstools;
