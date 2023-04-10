const sumAll = function(arg1, arg2) {
    if (!Number.isInteger(arg1) || !Number.isInteger(arg2)) 
        return "ERROR";
    const int1 = parseInt(arg1);
    const int2 = parseInt(arg2);
    let bigArg = 0;
    let smallArg = 0;
    //check for args as positive
    if (int1<0 || int2<0) {
        return "ERROR";
    }
    // checks for bigArg and smallArg
    if (int1<int2) {
        smallArg = int1;
        bigArg = int2;
    } else {
        bigArg = int1;
        smallArg = int2;
    }
    
    let totalSum = 0
    for (let i = smallArg; i <= bigArg; i++) {
        totalSum += i
    }
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
