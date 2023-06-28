import isSymbol from "../common/isSymbol.js";
import baseToNumber from "../common/baseToNumber.js";

/**
 * @description     计算和
 * @param values
 * @returns {number|*|undefined}
 */
function sum(values) {
    if (values === undefined || values === null || isSymbol(values)) return undefined;
    // 目前只支持一维数组，不支持多维数组
    if (Array.isArray(values)) {
        const m = values.length === 0 ? undefined : baseToNumber(values.reduce((a, b) => a + b, 0))
        return isNaN(m) ? undefined : m;
    }
    let mapArr = [];
    for (const value of arguments) {
        ['string', 'number'].includes(typeof value) && mapArr.push(value);
    }
    return sum(mapArr)
}
export default sum;