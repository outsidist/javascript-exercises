const leapYears = function(year) {
    //is year an integer?
    if (!Number.isInteger(year)) {
        return "ERROR";
    }
    //is year after 0 AD
    if (year<0) {
        return "ERROR";
    }
//check integer is divisible by 4
    if (year%4 === 0) {
        //check if integer is divisible by 100
        if (year%100 === 0) {
            if (year%400 === 0) {
                return true;
            } return false;
        } else { 
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
