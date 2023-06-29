import {obj_pro_toString} from "./getTypes.js";

function size(data) {
    if (['[object Array]', '[object String]'].includes(obj_pro_toString.call(data))) {
        return data.length;
    }
    return undefined;
}
export default size;