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
declare const isSymbol: (value: string | Symbol) => boolean;
declare const isArray: (value: any) => boolean;
declare const isString: (value: string) => boolean;
declare const toNumber: (value: string | number) => number;
declare const toStrings: (value: string | any[]) => string;
declare const getSize: (data: string | any[]) => number | undefined;
declare const computedMath: (fn: NumberFnMath, defaultValue: number) => NumberFnMath;
declare const arrayEach: (data: any[], fn: EachFnArray) => void;
declare const objectEach: (data: any, fn: EachFnObject) => void;
declare const toCaseFirst: (type: StringCase) => StringFn;
declare const add: NumberFnMath;
declare const subtract: NumberFnMath;
declare const multi: NumberFnMath;
declare const division: NumberFnMath;
declare const trim: (value: string) => string;
declare const capitalized: (value: string) => string;
declare const toLowerCase: (value: string) => string;
declare const isWith: (value: string, char: string, index: number) => boolean;
declare const padStart: (value: string, length: number, char?: string | undefined) => string;
declare const padEnd: (value: string, length: number, char?: string | undefined) => string;
declare const each: (data: EachDataType, fn: EachFnType) => EachFnType;
declare const utilstools: UtilsFuncs;

export { __AUTHOR__, __DESC__, __VERSION__, add, arrayEach, capitalized, computedMath, utilstools as default, division, each, getSize, isArray, isCard, isCharAndNum, isChinese, isEmail, isFloor, isHtmlTag, isLandline, isLoChar, isNegativeInt, isNumber, isPhone, isPhoneLoosest, isPositiveInt, isString, isSymbol, isUpChar, isWith, multi, objectEach, padEnd, padStart, subtract, toCaseFirst, toLowerCase, toNumber, toStrings, trim };
