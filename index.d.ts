type AnyType = any;
type EachDataType = any[] | {
    [k: string]: any;
};
type NumberFnMath = (x: number, y: number) => number;
type EachFnObject = (key: string, value: any, obj: any) => void;
type EachFnArray = (item: any, index: number, arr: any[]) => void;
type EachFnType = EachFnObject & EachFnArray;
type StringFn = (...args: any[]) => string;
type StringCase = "toUpperCase" | "toLowerCase";
interface IStringFuns {
    trim(value: string): string;
    capitalized(value: string): string;
    toLowerCase(value: string): string;
    isWith(value: string, char: string, index: number): boolean;
    padStart(value: string, length: number, char?: string | undefined): string;
    padEnd(value: string, length: number, char?: string | undefined): string;
    baseParseInt(value: string, radix?: number | undefined): number;
    baseParseFloat(value: string): number;
    repeatString(value: string, count: number): string;
    replaceString(value: string, searchValue: string, replaceValue: string): string;
    splitString(value: string, separator: string, limit?: number | undefined): string[];
}
interface IRegularFuns {
    isPhoneLoosest(value: string): boolean;
    isPhone(value: string): boolean;
    isEmail(value: string): boolean;
    isLandline(value: string): boolean;
    isCard(value: string): boolean;
    isChinese(value: string): boolean;
    isNumber(value: string): boolean;
    isHtmlTag(value: string): boolean;
    isCharAndNum(value: string): boolean;
    isLoChar(value: string): boolean;
    isUpChar(value: string): boolean;
    isPositiveInt(value: string): boolean;
    isNegativeInt(value: string): boolean;
    isFloor(value: string): boolean;
}
interface IArrayFuns {
    each(data: EachDataType, fn: EachFnType): EachFnType;
    chunks(data: AnyType[], size: number): AnyType[][];
    trueValue(data: AnyType): AnyType[];
    concat(...data: AnyType[]): AnyType[];
}
interface IUtilsFuns {
    isSymbol(value: Symbol | string): boolean;
    isArray(value: AnyType): boolean;
    isString(value: string): boolean;
    toNumber(value: string | number): number;
    toStrings(value: string | any[]): string;
    getSize(data: string | AnyType[]): number | undefined;
    computedMath(fn: NumberFnMath, defaultValue: number): NumberFnMath;
    arrayEach(data: AnyType[], fn: EachFnArray): void;
    objectEach(data: AnyType, fn: EachFnObject): void;
    toCaseFirst(type: StringCase): StringFn;
}
interface IMathFuns {
    add: NumberFnMath;
    subtract: NumberFnMath;
    multi: NumberFnMath;
    division: NumberFnMath;
}
type UtilsFuncs = IStringFuns & IRegularFuns & IArrayFuns & IUtilsFuns & IMathFuns & {
    __VERSION__: string;
    __AUTHOR__: string;
    __DESC__: string;
};

declare const __VERSION__: string;
declare const __AUTHOR__: string;
declare const __DESC__: string;
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
declare const isPhoneLoosest: (value: string) => boolean;
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
declare const isPhone: (value: string) => boolean;
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
declare const isEmail: (value: string) => boolean;
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
declare const isLandline: (value: string) => boolean;
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
declare const isCard: (value: string) => boolean;
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
declare const isChinese: (value: string) => boolean;
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
declare const isNumber: (value: string) => boolean;
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
declare const isHtmlTag: (value: string) => boolean;
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
declare const isCharAndNum: (value: string) => boolean;
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
declare const isLoChar: (value: string) => boolean;
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
declare const isUpChar: (value: string) => boolean;
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
declare const isPositiveInt: (value: string) => boolean;
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
declare const isNegativeInt: (value: string) => boolean;
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
declare const isFloor: (value: string) => boolean;
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
declare const isSymbol: (value: string | Symbol) => boolean;
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
declare const isArray: (value: any) => boolean;
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
declare const isString: (value: string) => boolean;
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
declare const toNumber: (value: string | number) => number;
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
declare const toStrings: (value: string | any[]) => string;
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
declare const getSize: (data: string | any[]) => number | undefined;
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
declare const computedMath: (fn: NumberFnMath, defaultValue: number) => NumberFnMath;
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
declare const arrayEach: (data: any[], fn: EachFnArray) => void;
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
declare const objectEach: (data: any, fn: EachFnObject) => void;
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
declare const toCaseFirst: (type: StringCase) => StringFn;
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
declare const add: NumberFnMath;
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
declare const subtract: NumberFnMath;
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
declare const multi: NumberFnMath;
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
declare const division: NumberFnMath;
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
declare const trim: (value: string) => string;
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
declare const capitalized: (value: string) => string;
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
declare const toLowerCase: (value: string) => string;
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
declare const isWith: (value: string, char: string, index: number) => boolean;
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
declare const padStart: (value: string, length: number, char?: string | undefined) => string;
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
declare const padEnd: (value: string, length: number, char?: string | undefined) => string;
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
declare const baseParseInt: (value: string, radix?: number | undefined) => number;
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
declare const baseParseFloat: (value: string) => number;
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
declare const repeatString: (value: string, count: number) => string;
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
declare const replaceString: (value: string, searchValue: string, replaceValue: string) => string;
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
declare const splitString: (value: string, separator: string, limit?: number | undefined) => string[];
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
declare const each: (data: EachDataType, fn: EachFnType) => EachFnType;
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
declare const chunks: (data: any[], size: number) => any[][];
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
declare const trueValue: (data: any) => any[];
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
declare const concat: (...data: any[]) => any[];
declare const utilstools: UtilsFuncs;

export { __AUTHOR__, __DESC__, __VERSION__, add, arrayEach, baseParseFloat, baseParseInt, capitalized, chunks, computedMath, concat, utilstools as default, division, each, getSize, isArray, isCard, isCharAndNum, isChinese, isEmail, isFloor, isHtmlTag, isLandline, isLoChar, isNegativeInt, isNumber, isPhone, isPhoneLoosest, isPositiveInt, isString, isSymbol, isUpChar, isWith, multi, objectEach, padEnd, padStart, repeatString, replaceString, splitString, subtract, toCaseFirst, toLowerCase, toNumber, toStrings, trim, trueValue };
