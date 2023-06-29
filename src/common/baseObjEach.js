import {obj_pro_toString} from "./getTypes.js";

function baseObjEach(filter, callback) {
    if ([null, undefined].includes(filter)) return filter;
    const backType = obj_pro_toString.call(callback);
    if (backType === '[object Function]') {
       for (const [key, value] of Object.entries(filter)) {
           callback(key, value, filter);
       }
    }

    return filter;
}

export default baseObjEach;