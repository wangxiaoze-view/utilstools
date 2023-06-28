import baseToNumber from "../common/baseToNumber.js";
import isSymbol from "../common/isSymbol.js";

/**
 * @description  最小值
 * @param values
 * @returns {number|*|undefined}
 */
function min(values) {
    if (values === undefined || values === null || isSymbol(values)) return undefined;
    // 目前只支持一维数组，不支持多维数组
    if (Array.isArray(values)) {
        const m = values.length === 0 ? undefined : baseToNumber(values.reduce((a, b) => a > b ? b : a))
        return isNaN(m) ? undefined : m;
    }
    let mapArr = [];
    for (const value of arguments) {
        ['string', 'number'].includes(typeof value) && mapArr.push(value);
    }
    return min(mapArr)
}
export default min;