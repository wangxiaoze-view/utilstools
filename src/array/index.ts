import { AnyType, IArrayFuns } from "../types";
import each from "./each";
import chunks from "./chunks";
import trueValue from "./trueValue";
import diffFilter from "./diffFilter";
import drop from "./drop";
import fill from "./fill";

const concat = (value: AnyType[], ...args: AnyType) => value.concat(args);

export default {
	each,
	chunks,
	trueValue,
	concat,
	diffFilter,
	drop,
	fill,
} as IArrayFuns;
