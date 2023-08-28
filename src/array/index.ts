import { AnyType, IArrayFuns } from "../types";
import each from "./each";
import chunks from "./chunks";
import trueValue from "./trueValue";

const concat = (value: AnyType[], ...args: AnyType) => value.concat(args)

export default {
	each,
	chunks,
	trueValue,
	concat
} as IArrayFuns;
