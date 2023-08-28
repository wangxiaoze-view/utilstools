import { EachDataType } from "../types";
import { isArray } from "../util/getTypes";

function chunks(value: EachDataType, chunkNum: number = 1) {

    isNaN(chunkNum) || chunkNum < 1 && (chunkNum = 1); 
    !isArray(value) && (value = []);
    // 根据chunkNum拆分数组value为二维数组
   
    const chunks = [];
    for (let i = 0; i < value.length; i++) {
        const sliceVal = value.slice(i * chunkNum, (i + 1) * chunkNum)
        chunks.push(sliceVal)
    }
    return chunks.filter(item => item.length > 0);
}

export default chunks;