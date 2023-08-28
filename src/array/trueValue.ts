import { isArray, obj_pro_toString } from "../util/getTypes";

function trueValue(value: any[]) {
    if(!isArray(value)) value = [];
    let index = 0;
    const filterValue = [];
    while (index < value.length) {
        const val = value[index];

        if (obj_pro_toString.call(val) === '[object Object]' && Object.keys(val).length === 0) {
            filterValue.push(0)
        } else {
            val && filterValue.push(val);
        }
        index++;
    }
    return filterValue
}

export default trueValue;