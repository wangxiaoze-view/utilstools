declare function computedMath$1(fn: (x: number, y: number) => number, defaultValue?: number): (x: number, y: number) => number;

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
declare function getSize$1(data: string | any[]): number | undefined;

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
declare const add: (x: number, y: number) => number;
declare const subtract: (x: number, y: number) => number;
declare const multi: (x: number, y: number) => number;
declare const division: (x: number, y: number) => number;

export { __AUTHOR__, __DESC__, __VERSION__, add, computedMath, division, getSize, isCard, isCharAndNum, isChinese, isEmail, isFloor, isHtmlTag, isLandline, isLoChar, isNegativeInt, isNumber, isPhone, isPhoneLoosest, isPositiveInt, isSymbol, isUpChar, multi, subtract, toNumber, toString };
