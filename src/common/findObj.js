import {obj_pro_toString} from "./getTypes.js";

function findObj(data, callback) {
    let result = undefined
    if ([null, undefined].includes(data)) return result;
    const dataType = obj_pro_toString.call(data);
    const backType = obj_pro_toString.call(callback);
    if (dataType !== '[object Object]') data = {};

    if (backType === '[object Function]') {
        for (const [key, value] of Object.entries(data)) {
            callback(key, value, data) && (result = value)
        }
    } else if (backType === '[object Object]') {
        for (const [key, value] of Object.entries(callback)) {
            key in data && value == data[key] && (result = value)
        }
    }
    return result

}


export default findObj;