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

export { __AUTHOR__, __DESC__, __VERSION__, isCard, isCharAndNum, isChinese, isEmail, isFloor, isHtmlTag, isLandline, isLoChar, isNegativeInt, isNumber, isPhone, isPhoneLoosest, isPositiveInt, isUpChar };
