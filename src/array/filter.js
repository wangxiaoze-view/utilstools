
import filterArr from "../common/filterArr.js";
import filterObj from "../common/filterObj.js";

function filter(data, filterFun) {
    const fun = Array.isArray(data) ? filterArr : filterObj;
    return fun(data, filterFun);
}
export default filter;