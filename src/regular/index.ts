import { IRegularFuns } from "../types";

const isPhoneLoosest = (value: string) =>
	/^(?:(?:\+|00)86)?1\d{10}$/.test(value);

const isPhone = (value: string) =>
	/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(
		value
	);

const isEmail = (value: string) =>
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		value
	);

const isLandline = (value: string) =>
	/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(value);

const isCard = (value: string) =>
	/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(
		value
	);

const isChinese = (value: string) =>
	/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(
		value
	);

const isNumber = (value: string) => /^\d+$/.test(value);

const isHtmlTag = (value: string) => /<(\w+)[^>]*>(.*?<\/\1>)?/.test(value);

const isCharAndNum = (value: string) => /^[A-Za-z0-9]+$/.test(value);

const isLoChar = (value: string) => /^[a-z]+$/.test(value);

const isUpChar = (value: string) => /^[A-Z]+$/.test(value);

const isPositiveInt = (value: string) => /^\+?[1-9]\d*$/.test(value);

const isNegativeInt = (value: string) => /^-[1-9]\d*$/.test(value);

const isFloor = (value: string) =>
	/^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/.test(value);

export default {
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
} as IRegularFuns;
