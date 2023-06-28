import baseToNumber from "./baseToNumber.js";

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
        return fun(baseToNumber(a), baseToNumber(b))
    };
}

export default computedMath;