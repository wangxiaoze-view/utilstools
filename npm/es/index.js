const obj_pro_toString = Object.prototype.toString;

/**
 * @description     是否是Symbol类型
 * @param value
 * @returns {boolean}
 */
function isSymbol(value) {
  return typeof value === 'symbol' || value !== null && obj_pro_toString.call(value) === '[object Symbol]';
}

/**
 * @description    转数字
 * @param value
 * @returns {number}
 */
function baseToNumber(value) {
  if (typeof value === 'number') return value;
  if (isSymbol(value)) return NaN;
  return +value;
}

/**
 * @description     数字相加
 * @param fun
 * @param defaultValue
 * @returns {(function(*, *): (number))|*}
 */
function computedMath(fun, defaultValue = 0) {
  return (a, b) => {
    if (a === undefined && b === undefined) return defaultValue;
    if (a !== undefined && b === undefined) return a;
    if (a === undefined && b !== undefined) return b;
    return fun(baseToNumber(a), baseToNumber(b));
  };
}

const add = computedMath((a, b) => a + b, 0);
var add$1 = add;

const subtract = computedMath((a, b) => a - b, 0);
var subtract$1 = subtract;

const multi = computedMath((a, b) => a * b, 0);
var multi$1 = multi;

const division = computedMath((a, b) => a / b, 0);
var division$1 = division;

/**
 * @description  最大值
 * @param values
 * @returns {number|*|undefined}
 */
function max(values) {
  if (values === undefined || values === null || isSymbol(values)) return undefined;
  // 目前只支持一维数组，不支持多维数组
  if (Array.isArray(values)) {
    const m = values.length === 0 ? undefined : baseToNumber(values.reduce((a, b) => a > b ? a : b));
    return isNaN(m) ? undefined : m;
  }
  let mapArr = [];
  for (const value of arguments) {
    ['string', 'number'].includes(typeof value) && mapArr.push(value);
  }
  return max(mapArr);
}

/**
 * @description  最小值
 * @param values
 * @returns {number|*|undefined}
 */
function min(values) {
  if (values === undefined || values === null || isSymbol(values)) return undefined;
  // 目前只支持一维数组，不支持多维数组
  if (Array.isArray(values)) {
    const m = values.length === 0 ? undefined : baseToNumber(values.reduce((a, b) => a > b ? b : a));
    return isNaN(m) ? undefined : m;
  }
  let mapArr = [];
  for (const value of arguments) {
    ['string', 'number'].includes(typeof value) && mapArr.push(value);
  }
  return min(mapArr);
}

/**
 * @description     计算和
 * @param values
 * @returns {number|*|undefined}
 */
function sum(values) {
  if (values === undefined || values === null || isSymbol(values)) return undefined;
  // 目前只支持一维数组，不支持多维数组
  if (Array.isArray(values)) {
    const m = values.length === 0 ? undefined : baseToNumber(values.reduce((a, b) => a + b, 0));
    return isNaN(m) ? undefined : m;
  }
  let mapArr = [];
  for (const value of arguments) {
    ['string', 'number'].includes(typeof value) && mapArr.push(value);
  }
  return sum(mapArr);
}

// 手机号校验，最宽松模式
const isPhoneLoosest = value => /^(?:(?:\+|00)86)?1\d{10}$/.test(value);
// 手机号校验，宽松模式
const isPhoneLoose = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value);
// 手机号校验，严谨模式
const isPhone = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(value);
// 电子邮箱
const isEmail = value => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
// 是否为座机
const isLandline = value => /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(value);
// 是否为身份证; 身份证号, 支持1/2代(15位/18位数字)
const isCard = value => /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(value);
// 是否为中文、汉字
const isChinese = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(value);
// 是否是纯数字
const isNumber = value => /^\d+$/.test(value);
// html标签(宽松匹配)
const isHtmlTag = value => /<(\w+)[^>]*>(.*?<\/\1>)?/.test(value);
// 数字和字母组成
const isCharAndNum = value => /^[A-Za-z0-9]+$/.test(value);

// 小写英文字母
const isLoChar = value => /^[a-zA-Z]+$/.test(value);
// 大写英文字母
const isUpChar = value => /^[A-Z]+$/.test(value);

// 正整数，不包含0
const isPositiveInt = value => /^\+?[1-9]\d*$/.test(value);
// 负整数，不包含0
const isNegativeInt = value => /^-[1-9]\d*$/.test(value);
// 浮点数
const isFloor = value => /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/.test(value);

export { add$1 as add, division$1 as division, isCard, isCharAndNum, isChinese, isEmail, isFloor, isHtmlTag, isLandline, isLoChar, isNegativeInt, isNumber, isPhone, isPhoneLoose, isPhoneLoosest, isPositiveInt, isUpChar, max, min, multi$1 as multi, subtract$1 as subtract, sum };
//# sourceMappingURL=index.js.map
