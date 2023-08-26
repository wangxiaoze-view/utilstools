function baseParseInt(value: string, radix?: number | undefined): number {
	if ( radix === undefined || isNaN(radix)) {
		radix = 10;
	} else {
		radix = +radix
	}
	return parseInt(value)
}

export default baseParseInt;