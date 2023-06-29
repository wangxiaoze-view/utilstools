import baseArrEach from "../common/baseArrEach.js";
import baseObjEach from "../common/baseObjEach.js";

function each(filter, funCallBack) {
    const fun = Array.isArray(filter) ? baseArrEach : baseObjEach;
    return fun(filter, funCallBack);
}

export default each;