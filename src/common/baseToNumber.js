import isSymbol from "./isSymbol.js";

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

export default baseToNumber;