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
import toNumber from "./toNumber";
type FnParamsType = number | string | undefined | null;

function computedMath(
	fn: (x: number, y: number) => number,
	defaultValue: number = 0
): (x: FnParamsType, y: FnParamsType) => number {
	return (x: FnParamsType, y: FnParamsType): number => {
		if (x === undefined && y === undefined) return defaultValue;
		if (x !== undefined && y === undefined) return x as number;
		if (x === undefined && y !== undefined) return y as number;
		return fn(toNumber(x as string), toNumber(y as string));
	};
}

export default computedMath;
