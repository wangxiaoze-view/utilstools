import findArr from "../common/findArr.js";
import findObj from "../common/findObj.js";

function find(data, callback){
    const fun = Array.isArray(data) ? findArr : findObj;
    return fun(data, callback);
}

export default find;