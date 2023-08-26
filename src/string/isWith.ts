import regular from "../regular";
import { isString } from "../util/getTypes";

function isWith(value: string, char: string, index = 0): boolean {
	if (!value || !isString(value) || index < 0) return false;

	if (!regular.isNumber(value)) {
		return value.indexOf(char) !== -1;
	}

	return value.indexOf(char) == index;
}

export default isWith;
