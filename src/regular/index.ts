/**
 *
 * 手机号校验，最宽松模式, 没有按照国家准展示; 只是数字展示11位
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isPhoneLoosest('+8613411111111') // true
 * isPhoneLoosest('13411111111') // true
 * ```
 */
const isPhoneLoosest = (value: string) =>
	/^(?:(?:\+|00)86)?1\d{10}$/.test(value);

/**
 *
 * 手机号校验，严谨模式 严格按照国家标准展示 如：13xxxx, 14xxxx, 15xxxx, 16xxxxx, 17xxxx, 18xxxx, 19xxxx;
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isPhone('+8612000000000') // false
 * isPhone('13111111111') // true
 * ```
 */
const isPhone = (value: string) =>
	/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(
		value
	);

/**
 *
 * 电子邮箱校验
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isEmail('123123') // false
 * isEmail('131111@qq.com') // true
 * ```
 */
const isEmail = (value: string) =>
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		value
	);

/**
 *
 * 是否为座机
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isLandline('123123') // false
 * isLandline('400-88888888') // true
 * ```
 */
const isLandline = (value: string) =>
	/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(value);

/**
 *
 * 是否为身份证; 身份证号, 支持1/2代(15位/18位数字)
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isCard('123123') // false
 * isCard('469025202308245159') // true  这里的号码是错误的
 * ```
 */
const isCard = (value: string) =>
	/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(
		value
	);

/**
 *
 * 是否为中文、汉字
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isChinese('123123') // false
 * isChinese('你好啊开发者') // true
 * ```
 */
const isChinese = (value: string) =>
	/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(
		value
	);

/**
 *
 * 是否是纯数字
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isNumber('1.22') // false
 * isNumber('122') // true
 * ```
 */
const isNumber = (value: string) => /^\d+$/.test(value);

/**
 *
 * html标签(宽松匹配)
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isHtmlTag('<html') // false
 * isHtmlTag('<html>') // true
 * ```
 */
const isHtmlTag = (value: string) => /<(\w+)[^>]*>(.*?<\/\1>)?/.test(value);

/**
 *
 * 数字和字母组成
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isCharAndNum('<html') // false
 * isCharAndNum('W123') // true
 * ```
 */
const isCharAndNum = (value: string) => /^[A-Za-z0-9]+$/.test(value);

/**
 *
 * 小写英文字母
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isLoChar('WW') // false
 * isLoChar('ww') // true
 * ```
 */
const isLoChar = (value: string) => /^[a-z]+$/.test(value);

/**
 *
 * 大写英文字母
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isUpChar('ww') // false
 * isUpChar('ww') // true
 * ```
 */
const isUpChar = (value: string) => /^[A-Z]+$/.test(value);

/**
 *
 * 正整数，不包含0
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isPositiveInt('0123') // false
 * isPositiveInt('1230') // true
 * ```
 */
const isPositiveInt = (value: string) => /^\+?[1-9]\d*$/.test(value);

/**
 *
 * 负整数，不包含0
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isNegativeInt('-01230') // false
 * isNegativeInt('-1230') // true
 * ```
 */
const isNegativeInt = (value: string) => /^-[1-9]\d*$/.test(value);

/**
 *
 * 浮点数
 * @version 1.0.0
 * @category Public
 * @param value 校验的字符串
 * @example
 *
 * ``` typescript
 * isFloor('-01230') // false
 * isFloor('12.00') // true
 * ```
 */
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
};
