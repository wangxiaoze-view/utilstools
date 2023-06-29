import {obj_pro_toString} from "./getTypes.js";

function baseArrEach(filter, callback) {
    // for (let i = 0; i < filter.length; i++) {
    //     callback(item, index, filter)
    // }
    // 判断传递的类型，可用for代替下面循环;
    const backType = obj_pro_toString.call(callback)
    let index = -1;
    if (backType === '[object Function]') {
        while (++index < filter.length) {
            callback(filter[index], index, filter)
        }
    }

    return filter;
}

export default baseArrEach;