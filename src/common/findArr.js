import {obj_pro_toString} from "./getTypes.js";

function findArr(data, callback) {
    const backType = obj_pro_toString.call(callback);
    let result = void 0;
    let index = -1;
    if (!Array.isArray(data)) result = [];

    if (backType === '[object Function]') {
        while (++index < data.length) {
            callback(data[index], index, data) && (result = data[index])
        }
    } else if (backType === '[object Object]') {
        while (++index < data.length) {
            const item = data[index];
            for (const [key, value] of Object.entries(callback)) {
                if (key in item && value == item[key]) {
                    result = data[index]
                }
                break
            }
        }
    }
    return result;
}


export default findArr;