import { NumberFnMath } from "../types";
import toNumber from "./toNumber";

function computedMath(
	fn: NumberFnMath,
	defaultValue: number = 0
): NumberFnMath {
	return (x: number, y: number): number => {
		if (x === undefined && y === undefined) return defaultValue;
		if (x !== undefined && y === undefined) return toNumber(x);
		if (x === undefined && y !== undefined) return toNumber(y);
		return fn(toNumber(x), toNumber(y));
	};
}

export default computedMath;
