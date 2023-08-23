/**
 *
 * 俩数加减乘除的底层算法
 * @version 1.0.0
 * @category Public
 * @param fn 传递的方法  defaultValue
 * @example
 *
 * ``` typescript
 * computedMath((a, b) => a + b, 0)
 * computedMath((a, b) => a - b, 0)
 * ```
 */
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
