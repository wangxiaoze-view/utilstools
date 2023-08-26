import toStrings from "../util/toStrings";
import toUpperFirst from "../util/toCaseFirst";

function capitalized(value: string) {
	return toUpperFirst("toUpperCase")(toStrings(value));
}

export default capitalized;
