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

declare const webUtils: UtilsFuncs;

export { webUtils as default };
