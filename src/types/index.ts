export type AnyType = any;
export type AbjectAny = {
	[k: string]: AnyType;
};

export type NumberFn = (...args: any[]) => number;
export type NumberFnMath = (x: number, y: number) => number;
export type EachFnObject = (key: string, value: any, obj: any) => void;
export type EachFnArray = (item: any, index: number, arr: any[]) => void;

export type EachFnType = EachFnObject & EachFnArray;
