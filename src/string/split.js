import {obj_pro_toString} from "../common/getTypes.js";

function split(str, char = '', count) {
    if (!['[object String]'].includes(obj_pro_toString.call(str))) return []
    return str.split(char, count ?? str.split(char).length);
}

export default split;