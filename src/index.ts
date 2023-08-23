/**
 * 去除两边空格
 *
 * @version 1.1.0
 * @category Public
 * @param s 去除空格的字符串
 * @example
 *
 * ``` typescript
 * trim('  123  ')
 * ```
 */
export const trim = (s: string): string => {
	return (s || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
