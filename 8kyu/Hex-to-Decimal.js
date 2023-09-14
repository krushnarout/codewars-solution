// Complete the function which converts hex number (given as a string) to a decimal number.

// My solution
function hexToDec(hexString) {
    if (hexString.startsWith("0x")) {
        hexString = hexString.slice(2);
    }

    return parseInt(hexString, 16);
}