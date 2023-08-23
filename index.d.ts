type AnyType = any;
type NumberFnMath = (x: number, y: number) => number;
type EachFnObject = (key: string, value: any, obj: any) => void;
type EachFnArray = (item: any, index: number, arr: any[]) => void;
type EachFnType = EachFnObject & EachFnArray;

/**
 *
 * 数组对象循环
 * @version 1.0.0
 * @category Public
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * each([1, 2, 3]) // true
 * each('469025202308245159') // false
 * ```
 */

type EachDataType = any[] | {
    [k: string]: any;
};
declare function each$1(data: EachDataType, fn: EachFnType): any;

/**
 *
 * 对象底层循环
 * @version 1.0.0
 * @category Public
 * @param value 传递的对象
 * @example
 *
 * ``` typescript
 * objectEach({a: 1, b: 2}, (key, value, obj) => {})
 * ```
 */

declare function objectEach$1(data: AnyType, fn: EachFnObject): any;

/**
 *
 * 数组底层循环
 * @version 1.0.0
 * @category Public
 * @param value 传递的数组
 * @example
 *
 * ``` typescript
 * arrayEach([1, 2, 3], (item, index, arr) => {})
 * ```
 */

declare function arrayEach$1(data: AnyType[], fn: EachFnArray): void;

/**
 *
 * 俩数加减乘除的底层算法
 * @version 1.0.0
 * @category Public
 * @param fn 传递的方法  defaultValue
 * @example
 *
 * ``` typescript
 * computedMath((a, b) => a + b, 0)
 * computedMath((a, b) => a - b, 0)
 * ```
 */

declare function computedMath$1(fn: NumberFnMath, defaultValue?: number): NumberFnMath;

/**
 *
 * 获取字符串，数组的长度
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * getSize('123123')
 * getSize('469025202308245159')
 * ```
 */

declare function getSize$1(data: string | AnyType[]): number | undefined;

/**
 *
 * 数字转字符串
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * toString(123123) //
 * toString([1, 2, 3]) //
 * ```
 */
declare function toString$1(value: string | Array<any>): string;

/**
 *
 * 字符串转数字
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * toNumber('123123') //
 * toNumber('469025202308245159') //
 * ```
 */
declare function toNumber$1(value: string | number): number;

/**
 *
 * 是否为Symbol对象
 * @version 1.0.0
 * @category Public
 * @param value 传递的字符串
 * @example
 *
 * ``` typescript
 * toNumber('123123') //
 * toNumber('469025202308245159') //
 * ```
 */
declare function isSymbol$1(value: Symbol | string): boolean;

declare const __VERSION__: string;
declare const __AUTHOR__: string;
declare const __DESC__: string;
declare const isPhoneLoosest: (value: string) => boolean;
declare const isPhone: (value: string) => boolean;
declare const isEmail: (value: string) => boolean;
declare const isLandline: (value: string) => boolean;
declare const isCard: (value: string) => boolean;
declare const isChinese: (value: string) => boolean;
declare const isNumber: (value: string) => boolean;
declare const isHtmlTag: (value: string) => boolean;
declare const isCharAndNum: (value: string) => boolean;
declare const isLoChar: (value: string) => boolean;
declare const isUpChar: (value: string) => boolean;
declare const isPositiveInt: (value: string) => boolean;
declare const isNegativeInt: (value: string) => boolean;
declare const isFloor: (value: string) => boolean;
declare const isSymbol: typeof isSymbol$1;
declare const toNumber: typeof toNumber$1;
declare const toString: typeof toString$1;
declare const getSize: typeof getSize$1;
declare const computedMath: typeof computedMath$1;
declare const arrayEach: typeof arrayEach$1;
declare const objectEach: typeof objectEach$1;
declare const add: (x: number, y: number) => number;
declare const subtract: (x: number, y: number) => number;
declare const multi: (x: number, y: number) => number;
declare const division: (x: number, y: number) => number;
declare const each: typeof each$1;

export { __AUTHOR__, __DESC__, __VERSION__, add, arrayEach, computedMath, division, each, getSize, isCard, isCharAndNum, isChinese, isEmail, isFloor, isHtmlTag, isLandline, isLoChar, isNegativeInt, isNumber, isPhone, isPhoneLoosest, isPositiveInt, isSymbol, isUpChar, multi, objectEach, subtract, toNumber, toString };
