import { version, author, description } from "../package.json";

import regular from "./regular/index";
import utils from "./util";
import array from "./array";
import string from "./string";

const __VERSION__ = version;
const __AUTHOR__ = author;
const __DESC__ = description;

const isPhoneLoosest = regular.isPhoneLoosest;
const isPhone = regular.isPhone;
const isEmail = regular.isEmail;
const isLandline = regular.isLandline;
const isCard = regular.isCard;
const isChinese = regular.isChinese;
const isNumber = regular.isNumber;
const isHtmlTag = regular.isHtmlTag;
const isCharAndNum = regular.isCharAndNum;
const isLoChar = regular.isLoChar;
const isUpChar = regular.isUpChar;
const isPositiveInt = regular.isPositiveInt;
const isNegativeInt = regular.isNegativeInt;
const isFloor = regular.isFloor;

const isSymbol = utils.isSymbol;
const isArray = utils.isArray;
const isString = utils.isString;

const toNumber = utils.toNumber;
const toString = utils.toString;
const getSize = utils.getSize;
const computedMath = utils.computedMath;
const arrayEach = utils.arrayEach;
const objectEach = utils.objectEach;

const add = computedMath((x: number, y: number) => x + y, 0);
const subtract = computedMath((a: number, b: number) => a - b, 0);
const multi = computedMath((x: number, y: number) => x * y, 0);
const division = computedMath((x: number, y: number) => x / y, 0);

const trim = string.trim;

const each = array.each;
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
	toString,
	getSize,
	computedMath,
	arrayEach,
	objectEach,

	// 数学
	add,
	subtract,
	multi,
	division,

	// 数组
	each,

	// 字符串
	trim,
};
