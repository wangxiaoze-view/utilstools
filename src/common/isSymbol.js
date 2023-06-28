import {obj_pro_toString} from "./getTypes.js";

/**
 * @description     是否是Symbol类型
 * @param value
 * @returns {boolean}
 */
function isSymbol(value) {
    return typeof value === 'symbol' || (value !== null && obj_pro_toString.call(value) === '[object Symbol]')
}

export default isSymbol;