import { isString } from "../util/getTypes";

function trim(value: string): string {
	if (isString(value)) {
		value.replace(/\s|\r|\t|\n/g, "");
	}
	return "";
}

export default trim;
