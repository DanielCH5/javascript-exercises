const leapYears = function(year) {
    //Checks if the year is divisible with 4 AND 400 to
    //check for leapyear
    if (year % 4 === 0 && year % 400 === 0){
        return true;
    }
    //Then checks if the year is divisible with 4 and
    //100
     else if (year % 4 === 0 && year % 100 === 0){
        return false;
    } //Checks if divisible with 4 in general
    else if (year % 4 === 0){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
