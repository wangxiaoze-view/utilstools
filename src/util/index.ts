import toNumber from "./toNumber";
import toStrings from "./toStrings";
import getSize from "./getSize";
import computedMath from "./computedMath";
import arrayEach from "./arrayEach";
import objectEach from "./objectEach";
import { isArray, isSymbol, isString } from "./getTypes";
import toCaseFirst from "./toCaseFirst";
import { IUtilsFuns } from "../types";
import filterObj from "./filterObj";
import filterArr from "./filterArr";

export default {
	isSymbol,
	isArray,
	isString,
	toNumber,
	toStrings,
	getSize,
	computedMath,
	arrayEach,
	objectEach,
	toCaseFirst,
	filterObj,
	filterArr,
} as IUtilsFuns;
