import {version, author, description} from '../package.json'
export const VERSION = version;
export const AUTHOR = author;
export const DESC = description;

// base 基础
export {default as baseToNumber} from './common/baseToNumber.js'
export {default as baseToString} from './common/baseToString.js'
export {default as computedMath} from './common/computedMath.js'
export {obj_pro_toString, sym_pro_toString} from './common/getTypes.js'
export {default as isSymbol} from './common/isSymbol.js'
export {default as baseArrEach} from './common/baseArrEach.js'
export {default as baseObjEach} from './common/baseObjEach.js'
export {default as filterArr} from './common/filterArr.js'
export {default as filterObj} from './common/filterObj.js'
export {default as findObj} from './common/findObj.js'
export {default as findArr} from './common/findArr.js'
export {default as size} from './common/size.js'

// 数学
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

// 数组
export {default as each} from './array/each.js'
export {default as filter} from './array/filter.js'
export {default as find} from './array/find.js'

// 字符串
export {default as trim} from './string/trim.js'
export {default as split} from './string/split.js'


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
