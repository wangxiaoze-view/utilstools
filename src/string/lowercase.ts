import toStrings from "../util/toStrings";
import toUpperFirst from "../util/toCaseFirst";

function toLowerCase(value: string) {
	return toUpperFirst("toLowerCase")(toStrings(value));
}

export default toLowerCase;
