import {obj_pro_toString} from "./getTypes.js";

function filterArr(data, callback) {
    const backType = obj_pro_toString.call(callback);
    let result = []
    let index = -1;
    if (!Array.isArray(data)) result = [];

    if (backType === '[object Function]') {
        while (++index < data.length) {
            callback(data[index], index, data) && result.push(data[index])
        }
    } else if (backType === '[object Object]') {
        while (++index < data.length) {
            const item = data[index];
            for (const [key, value] of Object.entries(callback)) {
                if (key in item && value == item[key]) {
                    result.push(data[index])
                }
                break
            }
        }
    }

    return result;
}

export default filterArr;