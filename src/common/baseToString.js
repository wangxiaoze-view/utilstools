import isSymbol from "./isSymbol.js";
import {sym_pro_toString} from "./getTypes.js";

/**
 * @description 转字符串
 * @param value
 * @returns {number|string|string|string|*|string}
 */
function baseToString(value) {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.map(baseToString).toString();
    if (isSymbol(value)) return sym_pro_toString.call(value) || '';
    const result = `${value}`;
    return result === 'Infinity' ? 0 : result
}
export default baseToString;