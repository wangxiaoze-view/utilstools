export type AnyType = any;
export type AbjectAny = {
	[k: string]: AnyType;
};

export type EachDataType = any[] | { [k: string]: any };
export type NumberFn = (...args: any[]) => number;
export type NumberFnMath = (x: number, y: number) => number;
export type EachFnObject = (key: string, value: any, obj: any) => void;
export type EachFnArray = (item: any, index: number, arr: any[]) => void;

export type EachFnType = EachFnObject & EachFnArray;

export type StringFn = (...args: any[]) => string;

export type StringCase = "toUpperCase" | "toLowerCase";

export interface IStringFuns {
	trim(value: string): string;
	capitalized(value: string): string;
	toLowerCase(value: string): string;
	isWith(value: string, char: string, index: number): boolean;
	padStart(value: string, length: number, char?: string | undefined): string;
	padEnd(value: string, length: number, char?: string | undefined): string;
}

export interface IRegularFuns {
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

export interface IArrayFuns {
	each(data: EachDataType, fn: EachFnType): EachFnType;
}

export interface IUtilsFuns {
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

export interface IMathFuns {
	add: NumberFnMath;
	subtract: NumberFnMath;
	multi: NumberFnMath;
	division: NumberFnMath;
}

export type UtilsFuncs = IStringFuns &
	IRegularFuns &
	IArrayFuns &
	IUtilsFuns &
	IMathFuns & {
		__VERSION__: string;
		__AUTHOR__: string;
		__DESC__: string;
	};