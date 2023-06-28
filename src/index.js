import {version, author} from '../package.json'
export const VERSION = version;
export const AUTHOR = author;
export const DESC = "基础的前端库，常用的数学算法，正则校验，数组字符串等...";

// base 基础
export {default as baseToNumber} from './common/baseToNumber.js'
export {default as baseToString} from './common/baseToString.js'
export {default as computedMath} from './common/computedMath.js'
export {obj_pro_toString, sym_pro_toString} from './common/getTypes.js'
export {default as isSymbol} from './common/isSymbol.js'


// 俩数相加
export {default as add} from './math/add.js'
// 俩数相减
export {default as subtract} from './math/subtract.js'
// 俩数相乘
export {default as multi} from './math/multi.js'
// 俩数相除
export {default as division} from './math/division.js'
// 数组最大值。
export {default as max} from './math/max.js'
// 数组最小值。
export {default as min} from './math/min.js'
// 数组之和。
export {default as sum} from './math/sum.js'

// 正则大全
export {
    isPhoneLoosest,
    isPhoneLoose,
    isPhone,
    isEmail,
    isLandline,
    isCard,
    isChinese,
    isNumber,
    isHtmlTag,
    isUpChar,
    isLoChar,
    isCharAndNum,
    isPositiveInt,
    isNegativeInt,
    isFloor,
} from './regular/index.js'
