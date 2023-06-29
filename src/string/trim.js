import {obj_pro_toString} from "../common/getTypes.js";

function trim(str) {
    if (['[object String]'].includes(obj_pro_toString.call(str))) {
        return str.replace(/\s|\r|\t|\n/g, '');
    }
    return ''
}
export default trim;