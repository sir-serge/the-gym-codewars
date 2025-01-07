function isCompletePattern(string) {
    let length = string.length;

    // Loop through possible pattern lengths (up to half the string length)
    for (let patternLength = 1; patternLength <= length / 2; patternLength++) {
        // Check if the string can be divided evenly by the pattern length
        if (length % patternLength === 0) {
            let pattern = string.slice(0, patternLength);
            let isPattern = true;

            // Check if the string is made entirely of the pattern
            for (let i = 0; i < length; i += patternLength) {
                if (string.slice(i, i + patternLength) !== pattern) {
                    isPattern = false;
                    break;
                }
            }

            if (isPattern) {
                return true;
            }
        }
    }

    return false;
}
