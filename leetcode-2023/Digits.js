// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function(num) {
    if(num==0) return 0;
    if(num%9==0) return 9;
    return num%9
};