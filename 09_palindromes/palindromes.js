const palindromes = function (original) {
    originalLowerWithoutSpaces = original.replace(/\s/g, "").replace(/\p{P}/gu, "").toLowerCase();
    reversedLowerWithoutSpaces = originalLowerWithoutSpaces.split("").reverse().join("")
    if (originalLowerWithoutSpaces === reversedLowerWithoutSpaces){
        return true;
    } else {
        return false;
    }
/*
take user input (String)
format string as lower
remove spaces from string, store as originalLowerWithoutSpaces
reverse string (from 04 exercise) const reverseString = function(toReverse) {
    return originalLowerWithoutSpaces.split("").reverse().join("")
    store as reversedLowerWithoutSpaces
check whether originalLowerWithoutSpaces and reversedLowerWithoutSpaces are identical
if identical return true, else false
*/
};

// Do not edit below this line
module.exports = palindromes;
